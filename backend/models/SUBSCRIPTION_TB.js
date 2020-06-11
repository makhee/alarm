module.exports = (sequelize, DataTypes) =>{
    const SUBSCRIPTION_TB = sequelize.define("SUBSCRIPTION_TB", {
        auth: {
            field: "auth",
            type: DataTypes.STRING(50),
            allowNull: false
        },
        endpoint: {
            filed: "endpoint",
            type: DataTypes.TEXT,
            set(value) {
                this.setDataValue("endpoint", JSON.stringify(value));
            },
            get() {
                return JSON.parse(this.getDataValue("endpoint"))
            },
            allowNull: false
        }
    }, {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        tableName: "SUBSCRIPTION_TB",
        Comment: "푸시 발송 정보"
    });

    return SUBSCRIPTION_TB;
}