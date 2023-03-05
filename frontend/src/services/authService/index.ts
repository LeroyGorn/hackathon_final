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
  public update(
    data: { user: IUpdateData },
    Authorization: string
  ): Promise<void | ISignUpResponse> {
    return this.httpService.patch("api/users/summary/update/", data, {
      headers: { Authorization },
    });
  }
  public create(
    data: ICreateProjectData,
    Authorization: string
  ): Promise<void | ICreateProjectData> {
    return this.httpService.post("api/projects/create/", data, {
      headers: { Authorization },
    });
  }
}

const factory = new HttpServiceInstances();
export const authService = new AuthService(factory.createAxiosHttpService());
