export class AuthModel {
  constructor() {
    this.credentials = {
      username: "pengguna",
      password: "masuk",
    };
  }

  validateCredentials(username, password) {
    return (
      username === this.credentials.username &&
      password === this.credentials.password
    );
  }
}
