import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-experience-details",
  templateUrl: "./experience-details.component.html",
  styleUrls: ["./experience-details.component.scss"]
})
export class ExperienceDetailsComponent {
  location: string;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.location = this._activatedRoute.snapshot.params.name;
  }
}
