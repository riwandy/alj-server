module.exports = (sequelize, DataTypes) =>{
    const SparepartRequest = sequelize.define('SparepartRequest', {
        requestID: {
            required: true,
            type: DataTypes.STRING
        },
        vehicleID: {
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
        purchasedBy: {
            type: DataTypes.STRING
        },
        deliveredFrom: {
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
        deliveryDate: {
            type: DataTypes.DATEONLY
        },
        deliveryPrice: {
            type: DataTypes.BIGINT
        },
        receiveDate: {
            type: DataTypes.DATEONLY
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

    return SparepartRequest
}

