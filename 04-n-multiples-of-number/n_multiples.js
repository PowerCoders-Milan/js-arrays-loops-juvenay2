// function declaration
const nMultiplesOf = (number, limit) => {
        multiplesOfNumber = [];
      let a = multiplesOfNumber;

      let i = number;
       while (i<limit){
          if (i%number === 0) {
            multiplesOfNumber.push(i);
            multiplesOfNumber.length >= limit;   
          }
           i++;   
       }
    
       return multiplesOfNumber
    }

console.log(nMultiplesOf(2, 20))




// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }
