Telephone Package
This package includes a Telephone class that exposes three different methods for managing phone numbers and notifying observers when a phone number is dialed.

#Methods
addPhoneNumber(number): This method is used to add a new phone number to the phone number list. It accepts a phone number as a parameter and pushes it to the phoneNumbers array.

removePhoneNumber(number): This method is used to remove a phone number from the phone number list. It accepts a phone number as a parameter and removes it from the phoneNumbers array.

dialPhoneNumber(number): This method is used to dial a phone number. It accepts a phone number as a parameter, checks if the number is present in the phoneNumbers array. If it is present, it logs the message "Dialing ${number}..." and notify the observer with the dialed phone number by calling the notifyObservers method. If it is not present, it logs an error message.

addObserver(observer): This method is used to add observer. It accepts an observer as a parameter and pushes it to the observers array.

removeObserver(observer): This method is used to remove observer. It accepts an observer as a parameter and removes it from the observers array.

notifyObservers(number): This method is used to notify the observer whenever a phone number is dialed. It iterates over the observers array and calls each observer function with the dialed phone number as a parameter.

#Usage
To use the Telephone class, first create an instance of the class:

javascript
Copy code
const phone = new Telephone();
Then, you can use the class methods to add, remove, and dial phone numbers:

javascript
<!-- Copy code -->
phone.addPhoneNumber("123-456-7890");
phone.addPhoneNumber("098-765-4321");
phone.dialPhoneNumber("123-456-7890");
You can also add and remove observers by calling the addObserver and removeObserver methods:

javascript
<!-- Copy code -->
phone.addObserver(function(number) { console.log(`The number ${number} has been dialed.`) });

javascript
<!-- Copy code -->
phone.removeObserver(function(number) { console.log(`The number ${number} has been dialed.`) });

Note
Keep in mind that the package is only capable of storing and dialing phone numbers in the format of string. So make sure that the numbers are passed as string while calling the methods.



