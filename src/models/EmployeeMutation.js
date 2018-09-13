module.exports = (sequelize, DataTypes) =>{
    const EmployeeMutation = sequelize.define('EmployeeMutation', {
        mutationID: {
            required: true,
            type: DataTypes.STRING
        },
        employeeID: {
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

    return EmployeeMutation
}

