// iteration ------------
const iterationFibs = (n) => { 
  let a = 0
  let b = 1
  let resualt;
  let arr = []
    for (let i = 1; i <= n; i++) {
      arr.push(a)
      resualt = a + b
      a = b 
      b = resualt
    }    
    console.log(arr)
 }

// Recursion  -------------
const recursionFibs = (n) => {
    let arr = []
    console.log(arr)
    if (n==1) {
      return arr.push(0) 
    }else if (n==2){
      return arr.push(1)
    }else{
      return fibs(n-1) + fibs(n-2)
    }
 }