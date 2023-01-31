function allLetter(inputtxt){ 
      let letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters)){
         alert('Your input has been accepted : you can try another');
         return true;
      } else {
         alert('Please input alphabet characters only');
      return false;
      }
   }
