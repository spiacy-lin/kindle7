import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Router} from '@angular/router';

interface User {
    name: string;
    email: string;
}

@Component({
    selector: 'users',
    templateUrl: './user.component.html'
})

export class UserComponent {
    usersCol:AngularFirestoreCollection<User>;
    users: any;
    constructor(private afs:AngularFirestore, private _router:Router){

    }

    ngOnInit(){
        this.usersCol = this.afs.collection('users');
        this.users = this.usersCol.valueChanges();
    }

    add(){
        this._router.navigate(['add']);
    }
}