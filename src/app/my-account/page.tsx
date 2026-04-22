import { connect } from "@/src/dbConfig/dbConfig";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/src/models/userSchema";

import UsersMain from "../ui/users/UsersMain";

export default async function MyAccount() {
  connect();
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");
  let curUser = { username: "" };
  if (userCookie) {
    const userIdObj: any = jwt.verify(
      userCookie.value,
      process.env.TOKEN_SECRET!,
    );
    const foundUser = await User.findById(userIdObj.id);
    if (foundUser) {
      curUser = foundUser;
    }
  }
  return <UsersMain curUser={curUser} />;
}
