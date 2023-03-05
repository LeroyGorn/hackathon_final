import { IUserState } from "./auth.types";

export interface ICVData {
  linked_in: string;
  telegram: string;
  github: string;
  work_experience: string;
  education: string;
  years_experience: number;
  is_public: boolean;
  tech_stack: string[];
}

export interface ICreateCVResponse {
  user: IUserState;
  linked_in: string;
  telegram: string;
  github: string;
  work_experience: string;
  education: string;
  years_experience: string;
  is_public: boolean;
  tech_stack: string[];
}
