const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'User'
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Product'
                },
                quantity: {
                    type: Number,
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);