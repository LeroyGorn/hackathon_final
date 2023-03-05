export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  password: string;
  check_password: string;
}

export interface IUpdateData {
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: string;
}

export interface ISignInResponse {
  refresh: string;
  access: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface ISignUpResponse {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}

export interface IUserState {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}
