import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let getFile;
  getFile = await fs.readFile(PATH_DB, 'utf8');
  const contactsArray = JSON.parse(getFile);
  const faker = createFakeContact();
  contactsArray.push(faker);
  const newContactsArray = JSON.stringify(contactsArray);
  await fs.writeFile(PATH_DB, newContactsArray);
};

addOneContact();

//  npm run add-one
