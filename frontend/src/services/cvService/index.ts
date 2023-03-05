import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import { ICreateCVResponse, ICVData } from "../../types/createcv.types";

export class CVService {
  constructor(private httpService: HttpService) {}
  public createCV(
    data: ICVData,
    token: string
  ): Promise<void | ICreateCVResponse> {
    return this.httpService.post("api/users/summary/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const factory = new HttpServiceInstances();
export const cvService = new CVService(factory.createAxiosHttpService());
