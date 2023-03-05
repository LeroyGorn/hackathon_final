export interface ICardProps {
  title: string,
  description: string,
  buttonText: string,
}

export interface ICreateProjectData {
  name: string;
  description: string;
  max_members: number;
  is_open: boolean,
  project_stack: string,
}