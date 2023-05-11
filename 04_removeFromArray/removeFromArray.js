const removeFromArray = function(array, ...args)
{
	return (array.filter(number => args.indexOf(number) < 0));
};
// Do not edit below this line
module.exports = removeFromArray;
