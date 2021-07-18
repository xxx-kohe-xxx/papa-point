import firebase from "firebase";

export const addUser = async (authUser: any) => {
  const resp = await firebase
    .firestore()
    .collection('users')
    .doc(authUser.uid as string)
    .set({...authUser}, {merge: true});
  return resp;
};

export const getTotalPoint = async (name: string) => {
  const snapshot = await firebase
    .firestore()
    .collection('total_point')
    .doc(name)
    .get();
  const totalPoint = snapshot.get('point');
  console.log(totalPoint);

  return totalPoint;
};