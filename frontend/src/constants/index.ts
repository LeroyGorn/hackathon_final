import { ICVData } from "../types/createcv.types";

export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong..",
}

export const initialSignInData = {
  email: "",
  password: "",
};

export const initialSignUpData = {
  first_name: "",
  last_name: "",
  email: "",
  role: "",
  password: "",
  check_password: "",
};

export const initialUpdateUserData = {
  first_name: "",
  last_name: "",
  email: "",
  role: "",
  password: "",
  check_password: "",
};

export const initialCreateProjectData = {
  name: "",
  description: "",
  max_members: "",
  is_open: "",
  project_stack: "",
};

export const createProjectInputData = [
  {
    id: 1,
    title: "Project Name",
    type: "name",
    placeholder: "Weather App",
    name: "name",
  },
  {
    id: 2,
    title: "Projects Description",
    type: "text",
    placeholder: "This project is...",
    name: "description",
  },
  {
    id: 3,
    title: "Required members",
    type: "number",
    placeholder: "5",
    name: "members",
  },
  {
    id: 4,
    title: "Update Role",
    type: "text",
    name: "stack",
    dropdown: true,
    dropdownHeader: "Choose your Stack",
    dropdownOptions: ["Python", "Scala", "C++", "C#", "Java", "JavaScript", "Ruby", "PHP", "Django", "Flask", "Laravel", "Symfony", "Spring", ".NET", "React", "Angular", "Ruby on rails", "TypeScript", "MySQL", "PostgreSQL", "Celery"],
  }
];

export const updateInputData = [
  {
    id: 1,
    title: "Update Email",
    type: "email",
    placeholder: "john.doe@example.com",
    name: "email",
  },
  {
    id: 2,
    title: "Update First Name",
    type: "text",
    placeholder: "John",
    name: "first_name",
  },
  {
    id: 3,
    title: "Update Last Name",
    type: "text",
    placeholder: "Doe",
    name: "last_name",
  },
  {
    id: 4,
    title: "Update Role",
    type: "text",
    name: "role",
    dropdown: true,
    dropdownHeader: "Select a Role",
    dropdownOptions: ["Recruiter", "Candidate"],
  }
];

export const signInInputData = {
  title: "Sign in",
  subtitle: "Sign in your own account!",
  inputs: [
    {
      id: 1,
      title: "Email",
      type: "email",
      placeholder: "john.doe@example.com",
      name: "email",
    },
    {
      id: 2,
      title: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
    },
  ],
  button: "Login",
};

export const signUpInputData = {
  title: "Sign up",
  subtitle: "Create your own account!",
  inputs: [
    {
      id: 1,
      title: "Email",
      type: "email",
      placeholder: "john.doe@example.com",
      name: "email",
    },

    {
      id: 2,
      title: "First Name",
      type: "text",
      placeholder: "John",
      name: "first_name",
    },
    {
      id: 3,
      title: "Last Name",
      type: "text",
      placeholder: "Doe",
      name: "last_name",
    },
    {
      id: 4,
      title: "Role",
      type: "text",
      name: "role",
      dropdown: true,
      dropdownHeader: "Select a Role",
      dropdownOptions: ["Recruiter", "Candidate"],
    },
    {
      id: 5,
      title: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
    },
    {
      id: 6,
      title: "Retype Password",
      type: "password",
      placeholder: "Re-Enter password",
      name: "check_password",
    },
  ],
  button: "Register",
};

export const NavBarLinks = [
  { name: "About", link: "/about" },
  { name: "Profile", link: "/profile" },
  { name: "Projects", link: "/projects" },
  { name: "Active Users", link: "/users" },
];

export const CreateInitialValues: ICVData = {
  tech_stack: [],
  telegram: "",
  github: "",
  linked_in: "",
  years_experience: 0,
  is_public: false,
  education: "",
  work_experience: "",
};

export const CreateCVData = {
  title: "Create Your CV",
  inputs: [
    {
      id: 1,
      name: "telegram",
      type: "text",
      placeholder: "Enter Your telegram",
      title: "Telegram",
    },
    {
      id: 2,
      name: "github",
      type: "text",
      placeholder: "Enter Your GitHub",
      title: "GitHub",
    },
    {
      id: 3,
      name: "linked_in",
      type: "text",
      placeholder: "Enter Your LinkedIn",
      title: "LinkedIn",
    },
    {
      id: 4,
      name: "years_experience",
      type: "number",
      placeholder: "Enter Your experience",
      title: "Years of Experience",
      min: 0,
    },
    {
      id: 5,
      size: "textarea",
      name: "education",
      type: "text",
      placeholder: "Enter Your Education",
      title: "Education",
    },
    {
      id: 6,
      size: "textarea",
      name: "work_experience",
      type: "text",
      placeholder: "Enter Your Work Experience",
      title: "Work Experience",
    },
  ],
  button: "Create Your CV",
};

export const StackOptions = [
  "Python",
  "C",
  "Scala",
  "C++",
  "C#",
  "Java",
  "JavaScript",
  "Ruby",
  "PHP",
  "Django",
  "Flask",
  "FastAPI",
  "Laravel",
  "Symfony",
  "Spring",
  ".NET",
  "React",
  "Angular",
  "Ruby on rails",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "Celery",
];
