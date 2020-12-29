/* Firebase Storageにアクセスし,画像を保存する */
import { useContext } from 'react';
import randomString from 'util/randomString';
import { FirebaseContext } from '../contexts';

const useStoreGiftImage: (image: File | undefined) => () => Promise<string> = (
  image,
) => {
  const { storage } = useContext(FirebaseContext);

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
