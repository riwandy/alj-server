module.exports = (sequelize, DataTypes) =>{
    const Vehicle = sequelize.define('Vehicle', {
        vehicleID: {
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
        registration: {
            required: true,
            type: DataTypes.STRING
        },
        year: {
            required: true,
            type: DataTypes.INTEGER
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
        },
        gasoline: {
            required: true,
            type: DataTypes.INTEGER
        }
    })

    return Vehicle
}

