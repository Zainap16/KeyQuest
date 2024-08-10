/*
Level 1:

prompt: 
Forward or Backward
Any posiition in A-G

User types it 
computer saves
computer sees if it matches with user

shows both user and computers answers!

*/


document.addEventListener("DOMContentLoaded", function(){


     let choice_value = ["Forwards","Backwards"];

    let choice = choice_value[Math.floor(Math.random() * 2)];
   
    let char = ["A","B","C","D","E","F","G"];
    
    let char_data = char[Math.floor(Math.random() * 7)];
    
    document.getElementById("prompt").innerHTML = ` ${choice} ${char_data} `;
   
})



