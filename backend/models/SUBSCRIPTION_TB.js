module.exports = function(sequelize, DataTypes){
    let SUBSCRIPTION_TB = sequelize.define("SUBSCRIPTION_TB", {
        endpoint: {
            filed: "endpoint",
            type: DataTypes.TEXT(),
            get: () => {
                return JSON.parse(this.getDataValue("endpoint"))
            },
            set: (value) => {
                return this.setDataValue("endpoint", JSON.stringify(value));
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