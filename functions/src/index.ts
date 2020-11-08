import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

export const totalPoints = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    const snap = await admin.firestore().collection('total_point').get();
    const data = snap.docs.map((doc) => doc.data());

    res.set('Access-Control-Allow-Origin', 'http://localhost:3000, https://papa-point-app.web.app/');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.send({ data });
  });
