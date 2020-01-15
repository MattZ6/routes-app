import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AuthLayoutComponent } from 'src/app/layouts/auth/auth.component';
import { MainLayoutComponent } from 'src/app/layouts/main/main.component';

import { HeaderComponent } from 'src/app/components/header/header.component';

import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ExperiencesComponent } from 'src/app/pages/experiences/experiences.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ExperienceDetailsComponent } from 'src/app/pages/experience-details/experience-details.component';

import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';

import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    AuthLayoutComponent,
    SignUpComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ExperiencesComponent,
    ProfileComponent,
    ExperienceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
