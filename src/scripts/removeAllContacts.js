import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const contactsArray = [];
  const newContactsArray = JSON.stringify(contactsArray);
  await fs.writeFile(PATH_DB, newContactsArray);
};

removeAllContacts();
