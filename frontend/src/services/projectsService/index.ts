import { HttpService } from "../http.service";
import { HttpServiceInstances } from "..";
import { IProjects } from "../../types/project.types";

export class ProjectsService {
  constructor(private httpService: HttpService) {}
  public getProjects(token: string): Promise<void | IProjects[]> {
    return this.httpService.get("api/projects/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public getProjectById(
    token: string,
    id: string
  ): Promise<void | { project: IProjects }> {
    return this.httpService.get(`api/projects/details/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const factory = new HttpServiceInstances();
export const projectService = new ProjectsService(
  factory.createAxiosHttpService()
);
