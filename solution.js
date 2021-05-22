function repeat(array) { 
  return [...array,...array,...array];
}
// reapeat test
repeat([1,2,3])


function reformat(text) { 
  let newText = '';
  for(let i = 0; i < text.length; i++) {
    let letter = text[i].toLowerCase();
    if(letter !== 'a' 
      && letter !== 'e'
      && letter !== 'i'
      && letter !== 'o'
      && letter !== 'u' ) {
      newText += letter;
    }
  }
  newText = newText.charAt(0).toUpperCase() + newText.slice(1);
  return newText;
}
// reformat test 
reformat("liMeSHArp DeveLoper TEST")

function next_binary_number(array) {
   let addFlag = true;
   for(let i = array.length - 1; i >= 0; i--) {
     if(addFlag) {
       if(array[i] === 0) {
         array[i] = 1; 
         addFlag = false;
       } else {
         array[i] = 0;
       }
     }
   }
   if(addFlag) {
     array = [1, ...array];
   }
   return array;
}
// next_binary_number test
next_binary_number([1,0])
next_binary_number([1,1])
next_binary_number([1,1,0])
next_binary_number([1,0,0,0,0,0,0,0,0,1])
