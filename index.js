//generate 7 digit random link
const arr = Array.from(Array(26)).map((e, i) => i + 65);
const alphabets = arr.map((e) => String.fromCharCode(e));
const UprAlphabets = alphabets;
const LwrAlphabets = alphabets.map((e) => e.toLocaleLowerCase());
const numbers = Array.from(Array(10)).map((e, i) => i);

const generateSmall = (l) => {
  let small = "";
  let maxNum = 0; //max 3
  for (let index = 0; index < l; index++) {
    let chooseDataType = [1, 2, 3];
    function random(arrayOfNums) {
      return arrayOfNums[Math.floor(Math.random() * arrayOfNums.length)];
    }
    let toChoose = random(chooseDataType);
    if (toChoose === 1) {
      if (maxNum < (Math.floor((40/100)*l))) {
        let randomNumber = Math.ceil(Math.random() * 9);
        small += numbers[randomNumber];
        maxNum++;
      } else {
        small += "Z";
      }
    } else if (toChoose === 2) {
      let randomUprAlphabets = Math.floor(Math.random() * 26);
      small += UprAlphabets[randomUprAlphabets];
    } else {
      let randomLwrAlphabets = Math.floor(Math.random() * 26);
      small += LwrAlphabets[randomLwrAlphabets];
    }
  }
  return small;
};


const generate = (len) => {
  let length=7;
  if(len){
    length=len<=7?7:len;
  }
  else{
    length=7;
  }
  return generateSmall(length);
  
};
const BabyId = { generate };

module.exports = BabyId;
