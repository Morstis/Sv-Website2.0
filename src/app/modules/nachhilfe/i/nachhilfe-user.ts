import { User } from '../../shared/i/user';

export interface NachhilfeUser extends User {
  faecher: string[];
  jahrgang: {
    jg1: string;
    jg2: string;
  };
  info?: string;
}
