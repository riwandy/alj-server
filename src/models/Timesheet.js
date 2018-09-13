module.exports = (sequelize, DataTypes) =>{
    const Timesheet = sequelize.define('Timesheet', {
        employeeID: {
            required: true,
            type: DataTypes.STRING
        },
        projectID: {
            required: true,
            type: DataTypes.STRING
        },
        date: {
            required: true,
            type: DataTypes.DATEONLY,
            validate: {
                isDate: "Tanggal tidak valid"
            }
        },
        hours: {
            required: true,
            type: DataTypes.INTEGER,
            validate: {
                isInt: "Jumlah Jam harus dalam angka"
            }
        },
        detail: {
            type: DataTypes.TEXT
        }
    })

    return Timesheet
}

