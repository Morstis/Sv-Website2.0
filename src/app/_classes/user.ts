import { UserInterface } from '../_interfaces/user-interface';

export class User implements UserInterface {
  id: number;
  vorname: string;
  nachname: string;
  klasse: string;
  email: string;
  role: string;

  constructor(id, vorname, nachname, klasse, email, role) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
    this.klasse = klasse;
    this.email = email;
    this.role = role;
  }
}
