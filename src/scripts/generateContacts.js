import { PATH_DB } from '../constants/contacts.js';

import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  for (let i = 0; i < number; i++) {
    let getFile;
    getFile = await fs.readFile(PATH_DB, 'utf8');
    const contactsArray = JSON.parse(getFile);
    const faker = createFakeContact();
    contactsArray.push(faker);
    const newContactsArray = JSON.stringify(contactsArray);
    await fs.writeFile(PATH_DB, newContactsArray);
  }
};

generateContacts(5);

//  npm run generate
