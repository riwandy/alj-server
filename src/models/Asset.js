module.exports = (sequelize, DataTypes) =>{
    const Asset = sequelize.define('Asset', {
        assetID: {
            required: true,
            type: DataTypes.STRING
        },
        category: {
            required: true,
            type: DataTypes.STRING
        },
        type: {
            required: true,
            type: DataTypes.STRING
        },
        brand: {
            required: true,
            type: DataTypes.STRING
        },
        series: {
            required: true,
            type: DataTypes.STRING
        },
        location: {
            required: true,
            type: DataTypes.STRING
        },
        condition: {
            required: true,
            type: DataTypes.STRING
        },
        remark: {
            required: true,
            type: DataTypes.TEXT
        }
    })

    return Asset
}

