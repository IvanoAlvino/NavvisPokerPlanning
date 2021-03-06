import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {PokerPlanningComponent} from './poker-planning/poker-planning.component';
import {AppComponent} from "./app.component";
import {CardsListComponent} from './cards-list/cards-list.component';
import {CardComponent} from './card/card.component';
import {UserComponent} from './user/user.component';
import {UsersListComponent} from './users-list/users-list.component';
import {VoteResultsComponent} from './vote-results/vote-results.component';
import {ChartsModule} from "ng2-charts";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
	declarations: [
		AppComponent,
		WelcomePageComponent,
		PokerPlanningComponent,
		CardsListComponent,
		CardComponent,
		UserComponent,
		UsersListComponent,
		VoteResultsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		HttpClientModule,
		FormsModule,
		ChartsModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule
{
}
