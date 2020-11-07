import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

export const totalPoints = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    const snap = await admin.firestore().collection('total_point').get();
    const data = snap.docs.map((doc) => doc.data());
    res.send({ data });
  });
