// function getPersonName(persons) {
//   return persons.map((person) => {
//     person.lastname = person.lastName.toUpperCase();
//     return person;
//   });
// }

// function getPersonAdd(persons) {
//   return persons.map((person) => {
//     person.add = '.......';
//     return person;
//   });
// }

// const persons = [
//   { name: 'Bart', lastName: 'Simpson', address: 'md' },
//   { name: 'Harry', lastName: 'Potter', address: 'kd' },
//   { name: 'Sherikc', lastName: 'Homes', address: 'uk' },
// ];

// const getCaptial = getPersonName(persons);
// const cenPerson = getPersonAdd(persons);

// console.log('getCap', getCaptial);
// console.log('cenPer', cenPerson);
// const harry = getCaptial.find(({ name }) => name === 'Harry');

// console.log('harry', harry);

function generateNewFolderName(existingFolders) {
  let count = 0;
  let name = '';
  existingFolders.forEach((folderName) => {
    if (folderName !== 'New Folder') {
      name = 'New Folder';
    } else if (folderName === 'New Folder') {
      count++;
      name = `New Folder ${count}`;
    }
  });

  return name;
}

console.log(generateNewFolderName(['New Folder']));
