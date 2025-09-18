import { SignInParams, SignUpParams } from "@/presentation";
import { HttpResponse } from "@/domain";
export interface IAuthApi {
  signIn(params: SignInParams): Promise<void>;
  signUp(params: SignUpParams): Promise<HttpResponse>;
  signOut(): Promise<void>;
}
