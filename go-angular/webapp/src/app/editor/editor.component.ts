import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth, } from '@angular/fire/auth';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
	ckeConfig: any;
	@ViewChild('editor', {static:false}) editor: any;
	
	public editorData = '<p>Note it!</p>'
	public isSourceActive: boolean;
	public sourceData: string;
	public userName = "";
	// public userName = this.authService.userName;

	constructor(public dialog: MatDialog, private router: Router, private authService: AuthService, public afAuth: AngularFireAuth) {}

	getUserEmail() {
		this.userName = this.afAuth.auth.currentUser.email;
		return this.userName;
	}
	

	ngOnInit() {
		// https://ckeditor.com/cke4/builder
		this.ckeConfig = {
		extraPlugins: 'uploadimage',
		uploadUrl:
			'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

		// Configure your file manager integration. This example uses CKFinder 3 for PHP.
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
		this.userName = this.afAuth.auth.currentUser.email;
	}

	SaveNote(pageName:string) {
		this.router.navigate([`${pageName}`]);
	}
	
	Login() {
		alert("Please log in");
	}
}
