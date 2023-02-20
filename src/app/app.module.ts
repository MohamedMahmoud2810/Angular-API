import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

const routes:Routes = [{path:'',component:UsersComponent} ,
                {path:'users' , component:UsersComponent},
                {path:'add' , component:AdduserComponent},
                {path:'update/:id',component:UpdateComponent} ,
                {path:'user/:id',component:UserdetailsComponent} ,
                {path:'**',component:ErrorComponent} ,
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    UserdetailsComponent,
    UpdateComponent,
    ErrorComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
