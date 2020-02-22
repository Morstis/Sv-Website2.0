import { UserInterface } from 'src/app/_interfaces/user-interface';

export interface NachhilfeSchueler extends UserInterface {
  faecher: string[];
  jahrgang: {
    jg1: string;
    jg2: string;
  };
  info?: string;
}
