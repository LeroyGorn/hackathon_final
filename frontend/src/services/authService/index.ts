import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import {
  ISignInData,
  ISignInResponse,
  ISignUpData,
  ISignUpResponse,
} from "../../types/auth.types";

export class AuthService {
  constructor(private httpService: HttpService) {}
  public signin(data: ISignInData): Promise<void | ISignInResponse> {
    return this.httpService.post("api/auth/login/", data);
  }
  public signup(data: ISignUpData): Promise<void | ISignUpResponse> {
    return this.httpService.post("api/auth/register/", data);
  }
}

const factory = new HttpServiceInstances();
export const authService = new AuthService(factory.createAxiosHttpService());
