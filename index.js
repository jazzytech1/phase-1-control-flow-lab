function scuberGreetingForFeet(ride){
if (ride <=400){
return 'This one is on me!'
}else if (1999 < ride && ride < 2500){ //ride is nested which allows the falsey and the truthy statements to be executed
return "I will gladly take your thirty bucks."
}else{
  return "No can do."
}
}
function ternaryCheckCity(NYC){
  let city = NYC
return city==='NYC'?'Ok, sounds good.' : "No go."
}

function switchOnCharmFromTip(tip) {
switch (tip){
  case 'generous':
  return "Thank you so much."

  case 'not as generous':
  return "Thank you."

  default: 'if anything else'
  return "Bye."

}
}





