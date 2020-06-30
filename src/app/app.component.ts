import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { AccountService } from './services/AccountService';
import { User } from './store/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  user: User;
  isLoggedIn$ : Observable<boolean>;
  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => {
      this.user = x; 
    });
  }

logout() {
    this.isLoggedIn$ =  this.accountService.isUserLoggedIn;
    this.accountService.logout();

}

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  title = 'my-store';
}
