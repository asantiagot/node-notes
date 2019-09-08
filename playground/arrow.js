const event = {
    name: 'Birthday',
    guests: ['Antonio', 'Eunice', 'Jose', 'Naye'],
    printGuests: function() {
        const address = {
            street: 'Bahamas 15'
        };
        const lastName = 'Santiago';
        this.guests.forEach(guest => {
            console.log(`${guest} is going to ${this.name} event`);
        });
        console.log(`event.name: ${this.name}. printGuests.lastName: ${lastName}. 
        printGuests.address.street: ${address.street}`);
    }
}

event.printGuests();