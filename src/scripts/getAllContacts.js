import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  let getFile;
  getFile = await fs.readFile(PATH_DB, 'utf8');
  const contactsArray = JSON.parse(getFile);
  return contactsArray;
};

console.log(await getAllContacts());

//  npm run get-all
