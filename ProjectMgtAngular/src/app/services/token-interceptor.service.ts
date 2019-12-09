import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {ErrorDialogService} from '../services/error.service'
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public errorDialogService: ErrorDialogService){};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');

    console.log("inside token itercepto => Token:" + token);

    if (token) {
      console.log(token);
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }

    // return next.handle(request);


    return next.handle(request).pipe(
      
      retry(2),
      
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
            reason: error && error.error && error.error.reason ? error.error.reason : '',
            status: error.status
        };
        //alert(data);
        this.errorDialogService.openDialog(data);
        return throwError(error);
      
      })
    );


  }
}