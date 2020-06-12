import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endpoint } from '../i/endpoint';
import { GenericSnackbarComponent } from '../c/generic-snackbar/generic-snackbar.component';
import { throwError, Observable, combineLatest } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';

export class GenericService<T> {
  private endpoint: Endpoint;
  protected dbRef: AngularFirestoreDocument<any>;

  constructor(
    protected db: AngularFirestore,
    protected snackBar: MatSnackBar,
    endpoint: Endpoint
  ) {
    this.endpoint = endpoint;
    this.dbRef = this.db.doc(this.endpoint.dbRef);
  }

  // _________Modify Database Methodes______________
  public upload(data): void {
    this.dbRef
      .collection<T>(this.endpoint.collRef)
      .add(data)
      .catch((err) =>
        this.handleError(
          err,
          'Es ist ein unerwarteter Fehler beim Hochladen aufgetreten!'
        )
      )
      .then(() => {
        this.success('Hochgeladen!');
      });
  }

  public getAll(): Observable<T[]> {
    return combineLatest([this.getAllValues(), this.getIDs()])
      .pipe(
        map((x) => {
          let elem: T[] = [] as T[];

          for (let i = 0; i < x[0].length; i++) {
            elem = [...elem, { ...x[0][i], key: x[1][i] }];
          }
          return elem;
        })
      )
      .pipe(
        catchError((err) =>
          this.handleError(
            err,
            'Es ist ein unerwarteter Fehler beim holen der Daten aufgetreten!'
          )
        )
      );
  }

  // Gets one entry
  public getOneByKey(key: string): Observable<T> {
    return this.dbRef
      .collection(this.endpoint.collRef)
      .doc<T>(key)
      .valueChanges()
      .pipe(
        catchError((err) =>
          this.handleError(
            err,
            'Es ist ein unerwarteter Fehler beim eines Daten aufgetreten!'
          )
        )
      );
  }

  // ____________Helper Methodes_________

  // Gets all Values from the main route
  private getAllValues(): Observable<T[]> {
    return this.dbRef.collection<T>(this.endpoint.collRef).valueChanges();
  }

  // Gets all keys from the main route
  private getIDs(): Observable<string[]> {
    return this.dbRef
      .collection<T>(this.endpoint.collRef)
      .snapshotChanges()
      .pipe(
        map((x) => {
          return x.map((y) => y.payload.doc.id);
        })
      );
  }

  // displays an error message w/ snackbar
  public handleError(error, message): Observable<never> {
    console.log(error, message); // TODO: add an error catcher

    this.snackBar.openFromComponent(GenericSnackbarComponent, {
      duration: 5000,
      panelClass: ['errorSnackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: { message, icon: 'error' },
    });

    return throwError(error);
  }

  // Displays a success message w/ snackbar
  protected success(message): void {
    this.snackBar.openFromComponent(GenericSnackbarComponent, {
      duration: 5000,
      panelClass: ['successSnackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: { message, icon: 'done' },
    });
  }
}
