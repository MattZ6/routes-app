import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PrivateGuard } from "src/app/guards/private/private.guard";
import { GuestGuard } from "src/app/guards/guest/guest.guard";

import { AuthLayoutComponent } from "src/app/layouts/auth/auth.component";
import { MainLayoutComponent } from "src/app/layouts/main/main.component";

import { SignInComponent } from "src/app/pages/sign-in/sign-in.component";
import { SignUpComponent } from "src/app/pages/sign-up/sign-up.component";

import { HomeComponent } from "src/app/pages/home/home.component";
import { ProfileComponent } from "src/app/pages/profile/profile.component";
import { ExperiencesComponent } from "src/app/pages/experiences/experiences.component";
import { ExperienceDetailsComponent } from "src/app/pages/experience-details/experience-details.component";

import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [GuestGuard],
    component: AuthLayoutComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "signin" },
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent }
    ]
  },
  {
    path: "app",
    canActivate: [PrivateGuard],
    component: MainLayoutComponent,
    children: [
      { path: "", pathMatch: "full", component: HomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "experiences", component: ExperiencesComponent },
      { path: "experiences/:name", component: ExperienceDetailsComponent }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
