import { IAuthApi, HttpResponse } from "@/domain";
import { ApiClient } from "@/infra";
import { SignInParams, SignUpParams } from "@/presentation";
import { signIn, signOut } from "next-auth/react";

class AuthApi implements IAuthApi {
  private client = new ApiClient();
  async signIn({ email, password }: SignInParams): Promise<void> {
    await signIn("credentials", { email, password });
  }
  async signUp(params: SignUpParams): Promise<HttpResponse> {
    return this.client.post({
      url: "/signup",
      body: {
        email: params.email,
        name: params.name,
        password: params.password,
      },
    });
  }
  async signOut(): Promise<void> {
    await signOut();
  }
}

export const authApi = () => new AuthApi();
