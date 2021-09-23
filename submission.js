const findSum = function(array) {
   let total=0;
  for(let num of array) {
      total+= num;
  } return total;
};

const findFrequency = function(array) {
   let obj = {};
    let mostNo=-Infinity;
    let leastNo = Infinity;
    let mostFreq = "";
    let leastFreq= "";


    for(let el of array) {
        obj[el] = obj[el] + 1 || 1;
    }

    for(let el in obj) {
        if(obj[el] > mostNo) {
            mostNo = obj[el];
            mostFreq = el; 
        }
    }


   for(let el in obj) {
        if(obj[el] < leastNo) {
            leastNo = obj[el];
            leastFreq = el; 
        }
    }

    return {most: mostFreq, least: leastFreq};

};



const isPalindrome = function(str) {
     let str2 = str;
     const newVar = str.split('').reverse('').join('');

    if(str2.toLowerCase() === newVar.toLowerCase()) {
        return true;
    }
       
      return false;
};



const largestPair = function(array) {
  let product = -Infinity;

    for(let i=0; i<array.length; i++) {
        if ((array[i] * array[i+1]) > product) {
            product = (array[i] * array[i+1]);
        }
    } return product;
 
};


const removeParenth = function(str) {
   str=str.replace(/[()]/g,"");
            return str;
};

const scoreScrabble = function(str) {
   let total = 0;

    for(let letter of str.toLowerCase()) {
        
    switch(true) {
        case 'aeioulnrst'.includes(letter):
        total+=1;
        break;
         
         case 'dg'.includes(letter):
        total+=2;
        break; 

        case 'bcmp'.includes(letter):
        total+=3;
        break; 

        case 'fhvwy'.includes(letter):
        total+=4;
        break; 

        case 'k'.includes(letter):
        total+=5;
        break;
        
        case 'jx'.includes(letter):
        total+=8;
        break;

        case 'qz'.includes(letter):
        total+=10;
        break;
    
        default: 0;

    }

} return total;
};
