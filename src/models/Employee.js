module.exports = (sequelize, DataTypes) =>{
    const Employee = sequelize.define('Employee', {
        employeeID: {
            required: true,
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: 'EmployeeID must be unique.',
            },
        },
        name: {
            required: true,
            type: DataTypes.STRING,
        },
        address: DataTypes.STRING,
        idNumber: DataTypes.BIGINT,
        hp: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            unique: {
                args: true,
                message: 'Phone number must be unique.',
            },
        },
        whatsapp: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                message: 'Whatsapp username must be unique.',
            },
        },
        position: DataTypes.STRING,
        currentProject: DataTypes.STRING,
        debt: DataTypes.BIGINT,
        salary: DataTypes.BIGINT,
        emergency_contact: DataTypes.STRING,
        emergency_phone: DataTypes.INTEGER,
        emergency_address: DataTypes.STRING,
    })

    return Employee
}

