import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../sv-website3-lwp1251-firebase-adminsdk-e5bfd-f9950405fc.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sv-website3-lwp1251.firebaseio.com',
});

export const login = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    admin
      .firestore()
      .collection('user')
      .where('email', '==', req.body.email)
      .get()
      .then((result) => {
        if (result.docs.length > 1) {
          res.send({ error: 'Zu viele Email Adressen! Eigentlich Unmöglich!' });
          return;
        }
        if (result.docs.length < 1) {
          res.send({ error: 'Existiert nicht!' });
          return;
        }
        if (result.docs[0].data().pw1 !== req.body.password) {
          res.send({ error: 'Falsches Passwort!' });
          return;
        }
        return admin
          .auth()
          .createCustomToken(result.docs[0].id, result.docs[0].data());
      })
      .then((token) => res.send({ token }))
      .catch((error) => res.send(error));
  } else {
    res.send();
  }
});

export const register = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    admin
      .firestore()
      .collection('user')
      .add(req.body)
      .then((result) => admin.auth().createCustomToken(result.id, req.body))
      .then((token) => res.send({ token }))
      .catch((error) => {
        console.log(error);
        res.send({ error });
      });
  } else {
    res.send();
  }
});
