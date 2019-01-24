import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private auth: AuthService, router: Router, userService: UserService) {
     auth.user$.subscribe(user => {
        if (user) {
            userService.save(user);

          const returnUrl = localStorage.getItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }
     });
    }

}

