import { HttpService } from "../http.service";
import { HttpServiceInstances } from "../";

export class TestService {
  constructor(private httpService: HttpService) {}
  public getData(): Promise<//   ISignUpResponse or some other type
  void> {
    return this.httpService.get("api/data/");
  }
}

const factory = new HttpServiceInstances();
export const authService = new TestService(factory.createAxiosHttpService());
