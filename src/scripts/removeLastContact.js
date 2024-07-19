import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  let getFile;
  getFile = await fs.readFile(PATH_DB, 'utf8');
  const contactsArray = JSON.parse(getFile);
  contactsArray.pop();
  const newContactsArray = JSON.stringify(contactsArray);

  await fs.writeFile(PATH_DB, newContactsArray);
};

removeLastContact();
