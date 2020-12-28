/* Firebase Storageにアクセスし,画像を保存する */

import { useContext } from 'react';
import { FirebaseContext } from '../contexts';

const useStoreGiftImage: (image: File | undefined) => () => Promise<string> = (
  image,
) => {
  const { storage } = useContext(FirebaseContext);

  // 5桁のrandom文字列生成
  const randomString = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);

  const storeImage: () => Promise<string> = async () => {
    const noImage = new File([new Blob()], '../../public/NoImage.jpg');
    const storageRef = storage
      ?.ref()
      .child(
        image === undefined
          ? noImage.name
          : image?.name.concat('-', randomString),
      );

    await storageRef
      ?.put(image === undefined ? noImage : image)
      .catch((err) => console.log(err.message));

    const downloadUrl: string = await storageRef?.getDownloadURL();

    return downloadUrl;
  };

  return storeImage;
};

export default useStoreGiftImage;
