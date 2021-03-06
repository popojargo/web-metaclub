import {Route} from '@angular/router';
import {Meteor} from 'meteor/meteor';

import {HomeComponent} from "./home/home.component.web";
import {CalendarComponent} from "./calendar/calendar.component.web";
import {SignupComponent} from "./auth/singup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";
import {ContactComponent} from "./contact/contact.component.web";

export const routes: Route[] = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'recover', component: RecoverComponent},
    {path: 'contact', component: ContactComponent}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !!Meteor.userId()
}];
