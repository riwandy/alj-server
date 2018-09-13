module.exports = (sequelize, DataTypes) =>{
    const Invoice = sequelize.define('Invoice', {
        invoiceID: {
            required: true,
            type: DataTypes.STRING
        },
        projectID: {
            required: true,
            type: DataTypes.STRING
        },
        vendorID: {
            required: true,
            type: DataTypes.STRING
        },
        invoiceDate: {
            required: true,
            type: DataTypes.DATEONLY
        },
        paymentDate: {
            required: true,
            type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        percentage: {
            required: true,
            type: DataTypes.DOUBLE
        },
        detail: {
            type: DataTypes.TEXT
        }
    })

    return Invoice
}

