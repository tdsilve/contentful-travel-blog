import { HttpResponse, ApiClient } from "@/infra";
import { SignInParams, SignUpParams } from "@/presentation";

class AuthApi {
  private client = new ApiClient();
  async signIn(params: SignInParams): Promise<HttpResponse> {
    return this.client.post({
      url: "/signin",
      body: params,
    });
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
}

export const authApi = () => new AuthApi();
