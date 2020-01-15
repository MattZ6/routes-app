import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  signed: boolean;

  constructor() {
    this.signed = !!localStorage.getItem(environment.SIGNED_KEY);
  }

  signIn() {
    this.signed = true;

    localStorage.setItem(environment.SIGNED_KEY, JSON.stringify(this.signed));
  }

  signOut() {
    this.signed = false;

    localStorage.removeItem(environment.SIGNED_KEY);
  }
}
