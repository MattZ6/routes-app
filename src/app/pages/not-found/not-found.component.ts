import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent {
  route: string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.route = `/${this._activatedRoute.snapshot.url.join("/")}`;
  }
}
