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
	// str = "Ara" ; // "Ara" => "ARA"
	str = str.toUpperCase(); // "M*D"  => 
	// "Z" + undefined + "Q" => ZundefinedQ
    let output = "" ; // "" + "N" => "N" 
	for(let i = 0 ; i < str.length; i++){
		if(lookup[str[i]]){
		 output += lookup[str[i]]	 // str[0] => "A"
		}
		else {
			output += str[i]; 
		}
	}
	return output;
}
  
  window.rot13 = rot13;