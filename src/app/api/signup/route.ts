import prisma from "@/lib/prisma";
import { HTTPErrorCode } from "@/lib/api/error";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { body } = await req.json();
    const { email, name, password } = body;
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return new Response(
        "Email taken",

        { status: HTTPErrorCode.UNPROCESSABLE_ENTITY },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return Response.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", {
      status: HTTPErrorCode.INTERNAL_SERVER_ERROR,
    });
  }
}
