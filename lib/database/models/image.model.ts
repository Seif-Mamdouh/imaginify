// "use server";
import { model, models, Schema } from 'mongoose';
import { transform } from 'next/dist/build/swc';


export interface Image extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    securedUrl: string;
    width?: number;
    height?: number;
    config?: Record<string, any>;
    transformationUrl?: Record<string, any>;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
    }; 
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    securedUrl: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: Object },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;