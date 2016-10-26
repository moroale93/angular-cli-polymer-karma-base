export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class Person implements IPerson {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
