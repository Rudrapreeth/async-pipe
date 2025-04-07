import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReversePipe } from "../reverse.pipe";
import { FormsModule } from '@angular/forms';
import { CommonModule,TitleCasePipe } from '@angular/common';
import { SalaryPipe } from '../salary.pipe';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [CommonModule, FormsModule, ReversePipe, TitleCasePipe, SalaryPipe]
})
export class UserListComponent {
  users$: Observable<User[]>;
  userCount: number | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
    
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']); //Redirect to login if not authenticated
    }

    this.users$ = this.userService.getUsers();
    this.fetchUserCount();
  }

  fetchUserCount() {
    this.userService.getUserCount().then((count) => {
      this.userCount = count;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page
  }
}
