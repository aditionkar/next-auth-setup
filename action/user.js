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

export { signin };