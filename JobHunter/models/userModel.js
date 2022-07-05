const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },

    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },
    mobileNumber: { type: Number },
    portfolio: { type: String, default: '' },

    about: { type: String, default: '' },
    address: { type: String, default: '' },

    education: { type: [], default: [''] },
    skills: { type: [], default: [''] },
    projects: { type: [], default: [''] },
    experience: { type: [], default: [''] },

    appliedJobs: [],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
exports.userSchema = userSchema;
exports.User = User;

