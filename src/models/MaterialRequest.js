module.exports = (sequelize, DataTypes) =>{
    const MaterialRequest = sequelize.define('MaterialRequest', {
        requestID: {
            required: true,
            type: DataTypes.STRING
        },
        item: {
            required: true,
            type: DataTypes.STRING
        },
        requestedBy: {
            required: true,
            type: DataTypes.STRING
        },
        approvedBy: {
            type: DataTypes.STRING
        },
        requestDate: {
            required: true,
            type: DataTypes.DATEONLY
        },
        amount: {
            required: true,
            type: DataTypes.INTEGER
        },
        vendorID: {
            required: true,
            type: DataTypes.STRING
        },
        projectID: {
            required: true,
            type: DataTypes.STRING
        },
        status: {
            required: true,
            type: DataTypes.STRING
        },
        receiveDate: {
            type: DataTypes.DATEONLY
        },
        receiveAmount: {
            type: DataTypes.INTEGER
        },
        receiver: {
            type: DataTypes.STRING
        },
        unit: {
            type: DataTypes.STRING
        },
        unitPrice: {
            type: DataTypes.BIGINT
        },
        paid: {
            required: true,
            type: DataTypes.BIGINT
        },
        detail: {
            type: DataTypes.TEXT
        }
    })

    return MaterialRequest
}

