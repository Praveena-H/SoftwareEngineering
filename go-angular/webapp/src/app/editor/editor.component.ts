import { Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth, } from '@angular/fire/auth';
import { NoteInfo } from '../NoteInfo';
import { NoteService } from '../service/note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [NoteService]
})

export class EditorComponent implements OnInit, AfterViewInit {
	ckeConfig: any;
	@ViewChild('editor', {static:false}) editor: any;
	
	public editorData = '<p>Note it!</p>'
	public isSourceActive: boolean;
	public sourceData: string;
	public userEmail = "";
	public noteInf = new NoteInfo();
	addSubscription: Subscription;
	constructor(public service: NoteService,public dialog: MatDialog, private router: Router, private authService: AuthService, public afAuth: AngularFireAuth) {}
    
	getUserEmail() {
		this.userEmail = this.afAuth.auth.currentUser.email;
		if(this.userEmail != null){
			return this.userEmail;
		}
		else{
			this.userEmail = "Guest"
			return this.userEmail;
		}
	}
	

	ngOnInit() {
		// https://ckeditor.com/cke4/builder
		this.ckeConfig = {
		extraPlugins: 'uploadimage',
		uploadUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
		filebrowserBrowseUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
		filebrowserImageBrowseUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
		filebrowserUploadUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
		filebrowserImageUploadUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
		};
		
	}
	
	ngAfterViewInit() {
		this.editor.dataChange.subscribe( ( value ) => {
			if ( !this.isSourceActive ) {
				this.sourceData = value;
			}
		});
	}

	RouteToArchive() {
		console.log("Opening  " + this.getUserEmail() + "'s archive!");
		this.router.navigate([`archive`]);
	}
	  
	SaveNote(){
		console.log("Saving note with contents... " + this.sourceData + " ...to " + this.getUserEmail() + "'s archive!");
		//TODO - save this.sourceData to firebase DB
		
		this.noteInf.content = this.editorData;
		this.noteInf.id = this.userEmail;
		this.noteInf.title = "sample note1";
		this.noteInf.tag = "red";
		this.addSubscription = this.service.saveNote(this.noteInf)
        .subscribe();


		//reset editorData after saving note
		alert("Note Saved!");
		this.editorData = '<p>Note it!</p>'
	}
	
	Logout() {
		console.log("Logging out the current user... " + this.getUserEmail());
		this.afAuth.auth.signOut();
		this.router.navigate(['login']);
	}
	
}
