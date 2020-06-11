<template>
  <div id="notify">
    <div id="description">
      <section class="subscription-details js-subscription-details is-invisible">
        <p>Service Worker를 이용한 웹 푸시발송 테스트.</p>
        <p>
          <code class="js-subscription-json"></code>
        </p>
      </section>
    </div>
    <div id="form">
      <h2>Web Push</h2>
      <button
        disabled
        class="js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
      >Enable Push Messaging</button>
      <button
        class="js-send-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
      >Push Messaging</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      console.log("Service Worker and Push is supported");

      navigator.serviceWorker
        .register("js/sw.js")
        .then(swReg => {
          console.log("Service Worker is registered", swReg);

          this.swRegistration = swReg;
          this.initializeUI();
        })
        .catch(error => {
          console.error("Service Worker Error", error);
        });
    } else {
      console.warn("Push messaging is not supported");
      this.pushButton.textContent = "Push Not Supported";
    }
  },
  data() {
    return {
      applicationServerPublicKey:
        "BP0f8poM7BcVZq10b0hddOF6VkltrbUBAjF6ydWLseQoKbFxW3wJ-u1IkZelCrz9gwLyQTVyuYYeV9qQxLLY6hU",
      pushButton: null,
      sendButton: null,
      isSubscribed: false,
      swRegistration: null,
      subscriptionJson: {}
    };
  },
  computed: {},
  methods: {
    urlB64ToUint8Array(base64String) {
      const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
      /* eslint-disable */
      const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },

    updateBtn() {
      if (Notification.permission === "denied") {
        this.pushButton.textContent = "Push Messaging Blocked.";
        this.pushButton.disabled = true;
        this.subscriptionJson = null;
        this.updateSubscriptionOnServer();
        return;
      }

      if (this.isSubscribed) {
        this.pushButton.textContent = "Disable Push Messaging";
      } else {
        this.pushButton.textContent = "Enable Push Messaging";
      }

      this.pushButton.disabled = false;
    },

    unsubscribeUser() {
      this.swRegistration.pushManager
        .getSubscription()
        .then(subscription => {
          if (subscription) {
            return subscription.unsubscribe();
          }
        })
        .catch(error => {
          console.log("Error unsubscribing", error);
        })
        .then(() => {
          this.subscriptionJson = null;
          this.updateSubscriptionOnServer();
          console.log("User is unsubscribed.");
          this.isSubscribed = false;
          this.updateBtn();
        });
    },

    updateSubscriptionOnServer() {
      const subscriptionJson = document.querySelector(".js-subscription-json");
      const subscriptionDetails = document.querySelector(".js-subscription-details");

      if (this.subscriptionJson) {
        subscriptionJson.textContent = `response code : ${JSON.stringify(this.subscriptionJson)}`;
        subscriptionDetails.classList.remove("is-invisible");

        this.$http.post("/api/subscribe", {
          endpoint: this.subscriptionJson
        });
      } else {
        subscriptionJson.textContent = "";
        subscriptionDetails.classList.add("is-invisible");

        this.$http.put("/api/subscribe", {
          endpoint: this.subscriptionJson
        });
      }
    },

    initializeUI() {
      this.pushButton = document.querySelector(".js-push-btn");
      this.pushButton.addEventListener("click", () => {
        this.pushButton.disabled = true;
        if (this.isSubscribed) {
          this.unsubscribeUser();
        } else {
          this.subscribeUser();
        }
      });

      this.sendButton = document.querySelector(".js-send-btn");
      this.sendButton.addEventListener("click", () => {
        this.$http.post("/api/sendpush", {
          endpoint: this.subscriptionJson
        });
      });

      this.swRegistration.pushManager.getSubscription().then(subscription => {
        this.isSubscribed = !(subscription === null);
        this.subscriptionJson = subscription;
        this.updateSubscriptionOnServer();
        if (this.isSubscribed) {
          console.log("User IS subscribed.");
        } else {
          console.log("User is NOT subscribed.");
        }
        this.updateBtn();
      });
    },

    subscribeUser() {
      const applicationServerKey = this.urlB64ToUint8Array(
        this.applicationServerPublicKey
      );
      this.swRegistration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey
        })
        .then(subscription => {
          console.log("User is subscribed.");
          this.subscriptionJson = subscription;
          this.updateSubscriptionOnServer();
          this.isSubscribed = true;
          this.updateBtn();
        })
        .catch(err => {
          console.log("Failed to subscribe the user: ", err);
          this.updateBtn();
        });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

div#app {
  width: 100%;
  height: 100%;
}

button.js-send-btn {
  margin-top: 5px;
}

div#app div#notify {
  align-items: center;
  background-color: #e2e2e5;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

div#app div#notify div#description {
  background-color: #ffffff;
  width: 580px;
  padding: 35px;
}

div#app div#notify div#description p {
  margin: 0;
  word-break: break-all;
}

div#app div#notify div#description p {
  font-size: 0.8em;
  color: #95a5a6;
  margin-top: 10px;
}

div#app div#notify div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

div#app div#notify div#form label,
div#app div#notify div#form input {
  outline: none;
  width: 100%;
}

div#app div#notify div#form label {
  color: #95a5a6;
  font-size: 0.8em;
}

div#app div#notify div#form input {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

div#app div#notify div#form ::placeholder {
  color: #ecf0f1;
  opacity: 1;
}

div#app div#notify div#form button {
  background-color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

div#app div#notify div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  div#app div#notify {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#app div#notify div#description {
    margin: 0 auto;
    max-width: 650px;
    width: 100%;
  }

  div#app div#notify div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#app div#notify div#form form {
    margin: 0 auto;
    max-width: 500px;
    width: 100%;
  }
}
</style>