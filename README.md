# Software Engineering - CEN5035 Spring 2022

## Application Overview
Note-It is a simple, quick, and easy to use note taking app hosted right on your web browser. After logging in, users will be droped right into a well equipped text editor ready to capture the latest notes from physics class or Saturday's shopping list. Our colored tags allow users to keep their notes organized and can alwasys be changed later.

## Project Demo
https://user-images.githubusercontent.com/59617003/164132180-b630cc7a-5826-488d-8958-795da95538cd.mp4


## API Documentation

We used FirebaseUI for Managing Users and Authentication.
Using FirebaseUI we can set up account for new users, handle authentication for registered users and logout functionalities.

https://firebase.google.com/docs/auth/web/firebaseui

For data storage, we used Firestore where user notes are Created, Retrieved, Updated and Deleted
https://firebase.google.com/docs/firestore/quickstart

## Project board link

https://github.com/users/Praveena-H/projects/1


## Cypress Tests
- Editing Note
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/edit_test.gif "Edit test")
- Deleting Note
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/delete_test.gif "Delete test")
- Saving Note
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/save_test.gif "Save test")
- Logout
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/logout_test.gif "Logout test")
- Verifying CKEditor
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/editor_test.gif "Editor test")
- Routing to Archive
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/archive_test.gif "Archive test")
- Filtering Notes by Tag
![alt text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/filter_test.gif "Filter test")


## Backend Unit Test
![alt_text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/backend_unit_test.gif "Unit Testing")
### Postman Test
- Get All Notes
![alt_text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/GetAllNotes.png)
- Save Note
![alt_text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/SaveNote.png)
- Edit Note
![alt_text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/EditNote.png)
- Delete Note
![alt_text](https://github.com/Praveena-H/SoftwareEngineering/blob/dev-sprint-4/Demos/DeleteNote.png)

## Members
**Front-end (Angular):**  Clayton Music, Fran Luka Antoljak

**Back-end (Golang):** Raul Salazar, Praveena Hariharan

## How to build and run
- Download our code
- Open the project file in your favorite IDE (we prefer VS code)
- Open a terminal and navigate to go-angular\webapp\ and enter
``` ng serve ```
- Open a new terminal, navigate to go-angular\server\ and enter
``` go run main.go app.go ```
- The app will be runnning on localhost:4200

## Sprint 1 Report

https://github.com/Praveena-H/SoftwareEngineering/blob/35f616a54b059da611a49612cc6d880213a510c7/Sprint1.md

## Sprint 2 Report

https://github.com/Praveena-H/SoftwareEngineering/blob/a99a06dc0946bc6f6687945ef474ab413bcc0e66/Sprint2.md

## Sprint 3 Report
https://github.com/Praveena-H/SoftwareEngineering/blob/22e4620210ed898904bab98d101cde843c575211/Sprint3.md

## Sprint 4 Report
https://github.com/Praveena-H/SoftwareEngineering/blob/f41f4009819aa8d74d25e3ea9693285ccff99f10/Sprint4.md

### Starter Code from https://github.com/Shpota/go-angular
