import Cryptr from 'cryptr';
const cryptr = new Cryptr('1234567890abcdef'); 

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