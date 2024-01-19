function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    return `Your Age Is ${zAge.split(" ")[0]}`;
  }

  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    const formattedName = namePattern(zName);
    const formattedAge = ageWithMessage(zAge);
    const formattedCountry = countryTwoLetters(zCountry);

    return `Hello ${formattedName}, ${formattedAge}, ${formattedCountry}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Output: Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Output: Hello Ahmed A., Your Age Is 32, You Live In SY
