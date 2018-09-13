module.exports = (sequelize, DataTypes) =>{
    const AssetMutation = sequelize.define('AssetMutation', {
        mutationID: {
            required: true,
            type: DataTypes.STRING
        },
        assetID: {
            required: true,
            type: DataTypes.STRING
        },
        currentLocation: {
            required: true,
            type: DataTypes.STRING
        },
        newLocation: {
            required: true,
            type: DataTypes.DATEONLY
        },
        date: {
            required: true,
            type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        detail: {
            type: DataTypes.TEXT
        }
    })

    return AssetMutation
}

