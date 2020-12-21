import { NavItem } from './../../model/nav-item';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/login/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() item: NavItem;

  constructor( public dialog: MatDialog,
    // tslint:disable-next-line:align
    private authenticationService: AuthenticationService,
    // tslint:disable-next-line:align
    private router: Router) { }

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  currentUser: User;
  // tslint:disable-next-line:typedef
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '',
    },
    {
      displayName: 'Profile',
      iconName: 'account_circle',
      route: 'editprofile/{{currentUser.id}}',
    },
    {
      displayName: 'Logout',
      iconName: 'power_settings_new',
      route: 'login'
    },
    ]

  ngOnInit(): void {
  }
  
  confirmationDialogbox(): void {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '350px',
      height: '150px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  onItemSelected(item: NavItem) {
      this.router.navigate([item.route]);
  }

}
