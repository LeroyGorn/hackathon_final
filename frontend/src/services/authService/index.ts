import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import { ISignInData, ISignInResponse } from "../../types/auth.types";

export class AuthService {
  constructor(private httpService: HttpService) {}
  public signin(data: ISignInData): Promise<void | ISignInResponse> {
    return this.httpService.post("api/auth/login/", data);
  }
}

const factory = new HttpServiceInstances();
export const authService = new AuthService(factory.createAxiosHttpService());
