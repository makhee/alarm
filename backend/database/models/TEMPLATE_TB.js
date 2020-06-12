module.exports = (sequelize, DataTypes) =>{
    const TEMPLATE_TB = sequelize.define('TEMPLATE_TB', {
        template: {
            filed: 'template',
            type: DataTypes.TEXT,
            set(value) {
                this.setDataValue('template', JSON.stringify(value));
            },
            get() {
                return JSON.parse(this.getDataValue('template'));
            },
            allowNull: false
        },
        description: {
            filed: 'description',
            type: DataTypes.STRING(255),
            allowNull: true
        },
        is_active: {
            field: 'is_active',
            type: DataTypes.ENUM('TRUE', 'FALSE'),
            defaultValue: 'TRUE',
            allowNull: false
        },
        device: {
            field: 'device',
            type: DataTypes.ENUM('PC', 'MOBILE'),
            defaultValue: 'PC',
            allowNull: false
        }
    }, {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        tableName: 'TEMPLATE_TB',
        Comment: '푸시 템플릿'
    });

    return TEMPLATE_TB;
}