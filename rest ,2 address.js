allUserAddress=[]
let storeUserAddress = (userId,...addresstoStore)=>
{
	console.log(userId)
	console.log(addresstoStore)
	let customAddress = {userId:userId,userAddress:addresstoStore}
	allUserAddress.push(customAddress)
	console.log(allUserAddress)
	return allUserAddress;
}

let firstAddress = {
	"streetAddress":"Some street address",
	"city":"New Delhi",
	"state":"Delhi",
	"pincode":"345432",
	"country":"India"
}

let secondAddress = {
	"streetAddress":"Another street address",
	"city":"Mumbai",
	"state":"MH",
	"pincode":"765786",
	"country":"India"
}

storeUserAddress("AdityaKumar934332",firstAddress,secondAddress)