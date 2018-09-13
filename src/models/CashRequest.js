module.exports = (sequelize, DataTypes) =>{
    const CashRequest = sequelize.define('CashRequest', {
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
            type: DataTypes.BIGINT
        },
        projectID: {
            required: true,
            type: DataTypes.STRING
        },
        status: {
            required: true,
            type: DataTypes.STRING
        },
        transferDate: {
            required: true,
            type: DataTypes.DATEONLY
        },
        transferMethod: {
            required: true,
            type: DataTypes.STRING
        },
        transferProof: {
            required: true,
            type: DataTypes.BLOB
        },
        detail: {
            required: true,
            type: DataTypes.ARRAY(DataTypes.TEXT)
        }
    })

    return CashRequest
}

