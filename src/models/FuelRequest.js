module.exports = (sequelize, DataTypes) =>{
    const FuelRequest = sequelize.define('FuelRequest', {
        requestID: {
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
        remainingAmount: {
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

    return FuelRequest
}

