var name = '김일호';
var letter = 'Dear '+name+'\n \n Prints to stdout with newline. Multiple arguments can '+name+' be passed, with the first used as the primary message and all additional '+name+' used as substitution values similar to printf(3) (the arguments are all passed to util.forma';
console.log(letter);


var letter = `Dear ${name}

Prints to stdout with newline. Multiple arguments can ${name} be passed, with the first used as the primary ${1+1}
message and all additional ${name} used as substitution values similar to printf(3) (the arguments are all passed to util.forma';
console.log(letter)`;

var a = '1';


