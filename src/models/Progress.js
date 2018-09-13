module.exports = (sequelize, DataTypes) =>{
    const Progress = sequelize.define('Progress', {
        progressID: {
            required: true,
            type: DataTypes.STRING
        },
        projectID: {
            required: true,
            type: DataTypes.STRING
        },
        month: {
            required: true,
            type: DataTypes.STRING
        },
        date: {
            required: true,
            type: DataTypes.DATEONLY
        },
        percentage: {
            required: true,
            type: DataTypes.DOUBLE
        }
    })

    return Progress
}

