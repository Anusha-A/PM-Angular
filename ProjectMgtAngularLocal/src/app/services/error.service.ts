import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'



import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorpageComponent } from '../components/errorpage/errorpage.component';

/*
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler{

  constructor(private injector: Injector , public zone: NgZone) { }
  handleError(error: any) { 
        const router = this.injector.get(Router);
        
        if (Error instanceof HttpErrorResponse) {
          console.log(error.status);
          //router.navigate(['errorpage']);
        }
        else {
          console.error("an error occurred here");
          //router.navigate(['errorpage']);
        }
        this.zone.run(() =>{router.navigate(['errorpage'])});
   }
 }
*/

@Injectable()
export class ErrorDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrorpageComponent, {
            width: '300px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.isDialogOpen = false;
            let animal;
            animal = result;
        });
    }
}