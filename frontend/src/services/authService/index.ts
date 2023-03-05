import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import {
  ISignInData,
  ISignInResponse,
  ISignUpData,
  ISignUpResponse,
  IUpdateData,
} from "../../types/auth.types";
import { ICreateProjectData } from "../../types/infoCard.types";

export class AuthService {
  constructor(private httpService: HttpService) {}
  public signin(data: ISignInData): Promise<void | ISignInResponse> {
    return this.httpService.post("api/auth/login/", data);
  }
  public signup(data: ISignUpData): Promise<void | ISignUpResponse> {
    return this.httpService.post("api/auth/register/", data);
  }
  public update(data: IUpdateData): Promise<void | ISignUpResponse> {
    return this.httpService.post("api/users/summary/update/", data);
  }
  public create(data: ICreateProjectData): Promise<void | ICreateProjectData> {
    return this.httpService.post("api/users/summary/update/", data);
  }
}

const factory = new HttpServiceInstances();
export const authService = new AuthService(factory.createAxiosHttpService());
