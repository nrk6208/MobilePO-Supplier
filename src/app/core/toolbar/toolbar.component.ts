import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import { AuthService } from '../../auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
	currentUser = {
		photoURL: '', // 'assets/images/avatars/hari.jpg',
		currentUserName: 'User Name' // 'Hari Krishna'
	};
  // notifications: [
		// 	{
		//         id: 'id',
		//         title: 'Mail 5',
		//         lastTime: '23 Minutes ago',
		//         state: 'state'
		//     },
		//     {
		//         id: 'id',
		//         title: 'Mail 5',
		//         lastTime: '23 Minutes ago',
		//         state: 'state'
		//     },
		//     {
		//         id: 'id',
		//         title: 'Mail 5',
		//         lastTime: '23 Minutes ago',
		//         state: 'state'
		//     },
		// ];
	searchOpen = false;
    // toolbarHelpers = ToolbarHelpers;
  	constructor(private authService: AuthService) {
			const user = authService.getUser();
			this.currentUser.currentUserName = `${user.FirstName} ${user.LastName}`;
		}

  	ngOnInit() {
  	}

}
