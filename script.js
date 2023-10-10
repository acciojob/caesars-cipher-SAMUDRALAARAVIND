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
	// str = "ARA" ;
    let output = "" ; // "" + "N" => "N" 
	for(let i = 0 ; i < str.length; i++){
		output += lookup[str[i]]	 // str[0] => "A"
	}
	return output;
}
  
  window.rot13 = rot13;