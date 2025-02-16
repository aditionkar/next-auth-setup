"use server";

import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import connectDB from "@/lib/db";
import { User } from "@/models/user";

const signin = async (formData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log("User created successfully");
  redirect("/login");
};

const fetchAllUsers = async () => {
  await connectDB();
  const users = await User.find({}).lean();
  // Convert _id (ObjectId) to string
  const sanitizedUsers = users.map(user => ({
    ...user,
    _id: user._id.toString() // ✅ Convert ObjectId to string
  }));
  return sanitizedUsers;
};

export { signin, fetchAllUsers };