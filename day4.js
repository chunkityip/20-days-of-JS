this.employeeService.checkEmailExists("test@email.com")
    .subscribe({
      next: (exists) => {
        if (exists) {
          console.log('Email already taken!');
        } else {
          console.log('Email is available');
        }
      },
      error: (error) => {
        console.log('Could not check email - server error');
      }
    });

// Imagine ordering a coffee at a café
function orderCoffee() {
    return new Promise((resolve, reject) => {
        console.log('Ordering coffee...');
        
        setTimeout(() => {
            // Simulating coffee being made after 2 seconds
            const success = true;  // Coffee machine is working

            if (success) {
                resolve('☕ Here is your coffee!');
            } else {
                reject('Sorry, coffee machine is broken');
            }
        }, 2000);
    });
}

// Customer ordering coffee
console.log('Customer: I would like to order a coffee');

orderCoffee()
    .then(result => console.log(result))    // If coffee is made successfully
    .catch(error => console.log(error));    // If something goes wrong

console.log('Customer: I will wait for my coffee');

// Output will be:
// Customer: I would like to order a coffee
// Ordering coffee...
// Customer: I will wait for my coffee
// (after 2 seconds)
// ☕ Here is your coffee!