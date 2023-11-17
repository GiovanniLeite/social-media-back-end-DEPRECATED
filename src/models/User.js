import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: '',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    occupation: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

export default User;
