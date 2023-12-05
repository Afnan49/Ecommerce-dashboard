import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserRequestsService {
  userLoggedBehavior: BehaviorSubject<boolean>;

  httpheader = {};

  constructor(private httpClient: HttpClient) {
    // this.userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  getAllUsers(): Observable<object[]> {
    return this.httpClient.get<object[]>(
      `${environment.BAseApiURL}/users/10000000/0`
    );
  }

  signup(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(
        `${environment.BAseApiURL}/admin/register`,
        user,
        this.httpheader
      )
      .pipe(
        retry(3))
      //   catchError((err) => {
      //     console.log(err.error.message, err.error.message ===
      //       'This email is used for a user account. Choose another email.');
          
      //     if (
      //       err.error.message ===
      //         'This email is already assigned as Admin. You can use it to login to the dashboard.' ||
      //       err.error.message ===
      //         'This email is used for a user account. Choose another email.'
      //     ) {
      //       alert(err.error.message);
      //       return
      //     }
      //     return throwError(() => {
      //       return new Error('Error While Adding user');
      //     });
      //   })
      // );
    // this.userLoggedBehavior.next(true);
  }

  addNewUser(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(
        `${environment.BAseApiURL}/users`,
        JSON.stringify(user),
        this.httpheader
      )
      .pipe(
        retry(3),
        catchError((err) => {
          return throwError(() => {
            return new Error('Error While Adding user');
          });
        })
      );
  }

  getOneUser(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.BAseApiURL}/users/${id}`);
  }

  editOneUser(id: string, updates): Observable<IUser> {
    console.log(updates);

    return this.httpClient.put<IUser>(
      `${environment.BAseApiURL}/users/${id}`,
      updates
    );
  }
}
