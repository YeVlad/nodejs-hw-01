import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const countContacts = async () => {
  let getFile;
  getFile = await fs.readFile(PATH_DB, 'utf8');
  const contactsArray = JSON.parse(getFile);
  const contactsAmount = contactsArray.length;
  return contactsAmount;
};

console.log(await countContacts());

//  npm run count
