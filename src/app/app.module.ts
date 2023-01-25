import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { DietAndNutritionComponent } from './diet-and-nutrition/diet-and-nutrition.component';
import { ToolsComponent } from './tools/tools.component';
import { PremiumComponent } from './premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProgramComponent,
    DietAndNutritionComponent,
    ToolsComponent,
    PremiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'program', component: ProgramComponent},
      { path: 'diet-and-nutrition', component: DietAndNutritionComponent},
      { path: 'tools', component: ToolsComponent},
      { path: 'premium', component: PremiumComponent},
      { path: '', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
