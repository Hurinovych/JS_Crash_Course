  //1
function getPromise(message, delay) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);
  });

  //2
  function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      let product = 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
          reject('Error! Incorrect array!');
          return;
        }
        product *= arr[i];
      }
      resolve(product);
    });
  }

calcArrProduct([3,4,5])
  .then(result => console.log(result)) // 60
  .catch(error => console.log(error));

calcArrProduct([1, 'a', 3])
  .then(result => console.log(result))
  .catch(error => console.log(error)); //Incorrect array