import Cryptr from 'cryptr';
const cryptr = new Cryptr('5sd4f54s5f45sf45sdf5sfs4d5f4s54f5sdf45s45f4s5f45s4f5ds4vsd54s5f'); 

export const encrypt = (text) => {
  if (!text) return '';
  try {
    return cryptr.encrypt(text);
  } catch (error) {
    console.error('Encryption error:', error);
    return '';
  }
}

export const decrypt = (encryptedText) => {
  if (!encryptedText) return '';
  try {
    return cryptr.decrypt(encryptedText);
  } catch (error) {
    console.error('Decryption error:', error);
    return '';
  }
}   
