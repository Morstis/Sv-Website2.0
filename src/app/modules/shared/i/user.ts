export class AdditionUserInfo {
  klasse = '';
  nachname = '';
  vorname = '';
  datenschutz = false;
  constructor(registerInfo?: AdditionUserInfo) {
    Object.assign(this, registerInfo);
  }
}

export class User extends AdditionUserInfo {
  key?: string;
  email: string;
  rolle: string;
  creationDate?: firebase.firestore.Timestamp;

  constructor(authUser: firebase.User, registerInfo?: AdditionUserInfo) {
    super(registerInfo ? registerInfo : null);

    this.email = authUser.email;
    this.rolle = 'USER';
  }
}
