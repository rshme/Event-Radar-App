import { AuthModel } from "../models/AuthModel";

export class AuthController {
  constructor() {
    this.model = new AuthModel();
  }

  login(username, password, onSuccess, onError) {
    if (!username || !password) {
      onError("Username and password are required");
      return;
    }

    if (this.model.validateCredentials(username, password)) {
      onSuccess("Login successful");
    } else {
      onError("Invalid username or password");
    }
  }
}
