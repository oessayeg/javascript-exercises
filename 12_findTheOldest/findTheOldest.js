const findTheOldest = function (people)
{
	let result = people.reduce((oldestOne, currentPerson) =>
	{
		oldAge = getAge(oldestOne.yearOfBirth, oldestOne.yearOfDeath);
		currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

		return oldAge > currentAge ? oldestOne : currentPerson;
	});
	return (result);
 };
  

function getAge(dateOfBirth, dateOfDeath)
{
	if (!dateOfDeath)
		return(new Date().getFullYear() - dateOfBirth);
	return (dateOfDeath - dateOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;