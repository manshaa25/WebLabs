function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    
    // Simulating successful completion
   resolve(data);
    reject({messege : "there is problem"});
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
     const v =getData();
    //.then(data => {
    console.log("I am after promise");

    })                    // get data return promise (data will take some time)
    .catch(error => {
    console.error('Error:', error.message);
    });
    console.log(v);

//let random = Math.random()
   // console.log(random > 0.5 ? resolve(data) : reject({messege : "there is problem"}));

