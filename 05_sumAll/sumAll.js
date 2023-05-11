const sumAll = function(first, last)
{
	let result;

	result = 0;
	if (first < 0 || last < 0 || typeof(first) != 'number' || typeof(last) != 'number')
		return ("ERROR");
	if (first < last)
	{
		for (; first <= last; first++)
			result += first;
	}
	else
	{
		for (; last <= first; last++)
			result += last;	
	}
	return (result);
};

// Do not edit below this line
module.exports = sumAll;
