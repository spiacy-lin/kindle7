import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

import {User} from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})

export class UserFormComponent {
    form: FormGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder, private _router:Router, private afs: AngularFirestore) {
        this.form = fb.group({
            username:['', Validators.required],
            email:['', Validators.required]
        })
    }

    ngOnInit() {
        this.title= "New User";

    }

    submit(){
        this.afs.collection('users').add({
            name: this.user.name,
            email: this.user.email
        });

        this._router.navigate(['']);
    }
}