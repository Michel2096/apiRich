import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        min: 18
    },
    isActive: {
        type: Boolean,
        default: true
    },
    roles: {
        type: String
    },
    address: {
        street: String,
        city: String,
        zipCode: String
    },
    birthDate: {
        type: Date
    },
    salary: {
        type: mongoose.Schema.Types.Decimal128
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'BLOCKED']
    }
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);
