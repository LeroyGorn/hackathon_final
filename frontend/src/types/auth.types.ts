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

export interface ISignInResponse {
  refresh: string;
  access: string;
}

export interface IUserState {
  email: string;
  first_name: string;
  last_name: string;
}
