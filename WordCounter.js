let string = "This Is, A Test String And, Nothing Else! 24 1152 252 2432 2456";
string = string.trim().split(" ").length;

console.log(`Words In This String Are ${string}!`);