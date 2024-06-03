interface ReactChildren {
  children: ReactNode;
}

interface ElementType {
  date: string;
  code: string;
  note: string;
  language: string;
}

interface UserType {
  _id?: number;
  uid: string;
  todo: ElementType[];
}

interface OutputType {
  code: number;
  output: string;
  signal: null;
  stderr: string;
  stdout: string;
}
