import {Component} from '@angular/core';
import {User} from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'A sample app done with Angular2 RC X';
    users: User[] = [
        {
            id: 25,
            name: 'Quentin Delance 2',
            username: 'qdelance'
        },
        {
            id: 26,
            name: 'User 1',
            username: 'user1'
        },
        {
            id: 28,
            name: 'User 2',
            username: 'user2'
        },
        {
            id: 29,
            name: 'John Doe',
            username: 'john'
        }
    ]
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(user);
    }
}
