// "use server";
import { model, models, Schema } from 'mongoose';

interface User extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo?: string;
    firstName: string;
    lastName: string;
    planId: string;
    creditBalance: number;
}


const UserSchema = new Schema({
    clerkId: { type: 'string', required: true, unique: true},
    email: { type: 'string', required: true, unique: true},
    username: { type: 'string', required: true, unique: true},
    photo: { type: 'string', required: true },
    firstName: { type: 'string'},
    lastName: { type: 'string' },
    planId: { type: 'string', default: 1 },
    creditBalance: { type: 'number', default: 10}
});


const User = models?.User || model('User', UserSchema);


export default User;