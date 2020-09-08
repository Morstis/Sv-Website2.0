import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endpoint } from '../i/endpoint';
import { GenericSnackbarComponent } from '../c/generic-snackbar/generic-snackbar.component';
import { throwError, Observable, combineLatest } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AngularFirestoreDocument } from '@angular/fire/firestore/public_api';
import { Message } from './message.class';

export class GenericService<T> extends Message {
  private endpoint: Endpoint;
  protected dbRef: AngularFirestoreDocument<any>;

  constructor(
    protected db: AngularFirestore,
    protected snackBar: MatSnackBar,
    endpoint: Endpoint
  ) {
    super(snackBar);
    this.endpoint = endpoint;
    this.dbRef = this.db.doc(this.endpoint.dbRef);
  }

  // _________Modify Database Methodes______________
  public upload(data: T): void {
    data = { ...data, creationDate: new Date() };

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
  public async deleteKey(key: string) {
    try {
      return this.dbRef.collection(this.endpoint.collRef).doc(key).delete();
    } catch (err) {
      return this.handleError(
        err,
        `Es ist ein unerwarteter Fehler beim Löschen des keys ${key} aufgetreten!`
      );
    }
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
            'Es ist ein unerwarteter Fehler beim holen eines Dateneintrages aufgetreten!'
          )
        )
      );
  }
  public createOneForKey(key: string, data: T) {
    data = { ...data, creationDate: new Date() };

    this.dbRef
      .collection<T>(this.endpoint.collRef)
      .doc(key)
      .set(data)
      .catch((err) =>
        this.handleError(
          err,
          `Es ist ein unerwarteter Fehler beim Hochladen des keys ${key} aufgetreten!`
        )
      )
      .then(() => {
        this.success('Hochgeladen!');
      });
  }
  public updateForKey(key: string, data: T) {
    data = { ...data, updated: new Date() };

    this.dbRef
      .collection<T>(this.endpoint.collRef)
      .doc(key)
      .update(data)
      .catch((err) =>
        this.handleError(
          err,
          `Es ist ein unerwarteter Fehler beim updaten des keys ${key} aufgetreten!`
        )
      )
      .then(() => {
        this.success('Update ausgeführt!');
      });
  }

  public keyExists(key: string) {
    return this.dbRef
      .collection(this.endpoint.collRef)
      .doc(key)
      .get()
      .pipe(
        map((x) => {
          return x.exists;
        })
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
}
