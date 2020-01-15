import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthService } from "src/app/services/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class PrivateGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate() {
    if (this._authService.signed) {
      return true;
    } else {
      this._router.navigate(["signin"]);

      return false;
    }
  }
}
