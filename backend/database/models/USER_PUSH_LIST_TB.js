module.exports = (sequelize, DataTypes) =>{
    const USER_PUSH_LIST_TB = sequelize.define('USER_PUSH_LIST_TB', {
        is_active: {
            field: 'is_active',
            type: DataTypes.ENUM('TRUE', 'FALSE'),
            defaultValue: 'TRUE',
            allowNull: false
        }
    }, {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        tableName: 'USER_PUSH_LIST_TB',
        Comment: '유저별 푸시 리스트'
    });

    return USER_PUSH_LIST_TB;
}