class Telephone {
        // constructor function to initialize the phoneNumbers and observers array
    constructor() {
        this.phoneNumbers = []; // array to store the phone numbers
        this.observers = [];  // array to store the observers
    }

    // method to add a new phone number to the phoneNumbers array
    addPhoneNumber(number) {
        this.phoneNumbers.push(number);
    }
    
    // method to remove a phone number from the phoneNumbers array
    removePhoneNumber(number) {
        this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
    }
    
    // method to dial a phone number, it checks if the number is present in phoneNumbers array or not
    dialPhoneNumber(number) {
        if (this.phoneNumbers.includes(number)) {
            console.log(`Now Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Error: ${number} is not in the phone number list.`);
        }
    }
 
     // method to add observer 
    addObserver(observer) {
        this.observers.push(observer);
    }
    
    // method to remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    // method to notify the observer whenever a phone number is dialed
    notifyObservers(number) {
        this.observers.forEach(o => o(number));
    }
}

const phone = new Telephone();

phone.addPhoneNumber("123-456-7890");
phone.addPhoneNumber("098-765-4321");
phone.dialPhoneNumber("123-456-7890");  // outputs "Dialing 123-456-7890..."
phone.dialPhoneNumber("111-111-1111");
