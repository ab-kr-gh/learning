let generateEmail = function(firstname,lastname,message)
{
		var emailMessage = `Hi ${firstname+" "+lastname}\n
					This is the message we have for you\n
					${message}\n`

	return emailMessage
}

console.log(generateEmail("Aditya","Kumar","Welcome to Edwisor"))