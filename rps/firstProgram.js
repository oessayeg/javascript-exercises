function getComputerMove()
{
	let randomNumber = Math.floor(Math.random() * 100);

	if (randomNumber % 3 == 0)
		return ("rock");
	else if (randomNumber % 3 == 1)
		return ("paper");
	return ("scissors");
}

function play(event)
{
	let computerMove;
	let userMove;

	computerMove = getComputerMove();
	userMove = this.classList.value;

	const changedUserScore = document.querySelector("#userScore");
	const changedComputerScore = document.querySelector("#computerScore");
	const parentElement = document.querySelector("#result");
	userScore = parseInt(document.querySelector("#userScore").textContent);
	computerScore = parseInt(document.querySelector("#computerScore").textContent);


	if (userScore == 5 || computerScore == 5)
		return ;
	if (computerMove == userMove)
		parentElement.textContent = "It's a draw !";
	else if ((computerMove == 'scissors' && userMove == 'paper')
		|| (computerMove == 'paper' && userMove == 'rock')
		|| (computerMove == 'rock' && userMove == 'scissors'))
		{
			parentElement.textContent = `You lose, ${computerMove} beats ${userMove}`;
			computerScore += 1;
			changedComputerScore.textContent = computerScore;
		}
	else
	{
		parentElement.textContent = `You win, ${userMove} beats ${computerMove}`;
		userScore += 1;
		changedUserScore.textContent = userScore;
	}

	if (userScore == 5 || computerScore == 5)
	{
		parentElement.id = "finished";
		if (computerScore > userScore)
			parentElement.textContent = "You lose !";
		else
			parentElement.textContent = "You win !";
	}

}

function getUserInputAndPlay()
{
	const buttons = document.querySelectorAll("button");

	buttons.forEach(button => button.addEventListener('click', play));
}

getUserInputAndPlay();