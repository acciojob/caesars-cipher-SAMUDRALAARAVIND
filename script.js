// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(str) {
  let decodedArr = ""; 
  for(let i = 0 ; i < str.length ; i++) {
	  // str = "AK#C" => "NX#P"
	  // lookup["#"]
	  if(lookup[str[i]] == undefined){
			decodedArr += str[i]
	  }
	  else decodedArr += lookup[str[i]]
  }
  return decodedArr ;
}

//  "n$%op" => "a$%bc"

window.rot13 = rot13;
