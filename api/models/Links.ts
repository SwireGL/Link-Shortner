import mongoose from 'mongoose';

const generateId = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

generateId(7);

const linkSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    originalUrl: { type: String, required: true }
}, { versionKey: false });

linkSchema.pre('save', async function(next) {
    if (!this.isNew) {
        next();
        return;
    }
    this._id = generateId(7);
    next();
});

const Link = mongoose.model('Link', linkSchema);
export default Link;