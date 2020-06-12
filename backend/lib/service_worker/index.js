/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */

'use strict';

/* eslint-disable max-len */
const applicationServerPublicKey = 'BP0f8poM7BcVZq10b0hddOF6VkltrbUBAjF6ydWLseQoKbFxW3wJ-u1IkZelCrz9gwLyQTVyuYYeV9qQxLLY6hU';

/* eslint-enable max-len */

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.addEventListener('push', (event) => {
  const title = '엑스투소프트 교육알림이';
  const notificationPromise = self.registration.showNotification(title, JSON.parse(event.data.text()));
  event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', (event) => {
  let action = event.action;
  let data = event.notification.data;

  event.notification.close();

  if (action === 'site') {
    event.waitUntil(
      // TODO: 임시로 로컬 사이트로 이동
      clients.openWindow(data.url)
    );
  }
});

// self.addEventListener('pushsubscriptionchange', (event) => {
//   console.log('[Service Worker]: \'pushsubscriptionchange\' event fired.');
//   const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//   event.waitUntil(
//     self.registration.pushManager.subscribe({
//       userVisibleOnly: true,
//       applicationServerKey: applicationServerKey
//     })
//       .then(function (newSubscription) {
//         // TODO: Send to application server
//         console.log('[Service Worker] New subscription: ', newSubscription);
//       })
//   );
// });