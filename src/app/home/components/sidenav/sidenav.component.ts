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
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() item: NavItem;
  currentUser: User;
  currentRouter = '';
  constructor( public dialog: MatDialog,
    // tslint:disable-next-line:align
    private authenticationService: AuthenticationService,
    // tslint:disable-next-line:align
    private router: Router) {
      {
        this.currentUser = this.authenticationService.currentUserValue;
        console.log("userid",this.currentUser.id)
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      }
     }

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  // tslint:disable-next-line:no-inferrable-types
  showSubmenu: boolean = false;
  isShowing = false;
  // tslint:disable-next-line:typedef
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'home',
    },
    {
      displayName: 'Profile',
      iconName: 'account_circle',
      route: 'editprofile/',
    },
    {
      displayName: 'Logout',
      iconName: 'power_settings_new',
      route: 'login'
    },
    // tslint:disable-next-line:semicolon
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
  // tslint:disable-next-line:typedef
  onItemSelected(item: NavItem) {
    if(item.route === 'editprofile/'){
      item.route = item.route +  this.currentUser.id;
    }
    this.currentRouter = item.route;
      // tslint:disable-next-line:align
      this.router.navigate([this.currentRouter]);
  }
  isActive(item){
    if(item.route === 'editprofile/'){
      item.route = item.route +  this.currentUser.id;
    }
    if(window.location.href.includes(item.route)){
    return true
    }
    return false
  }
  

}
