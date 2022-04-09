

function reverseVowels(input){
 
    var vowels = "aeiou";
    
    var vowelsToReverse = [];
    
    for(i = 0 ; i< input.length ; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            vowelsToReverse.push(str[i]);
        }
    }
    var strArray = input.split('');
    var lastIndex = vowelsToReverse.length — 1;
    for ( i = 0 ;i < strArray.length ; i++) {
    if(vowels.indexOf(strArray[i]) > -1) {
    strArray[i] = vowelsToReverse[lastIndex];
    lastIndex — ;
    }
    }
    if(str !== strArray.join(''))
    return strArray.join('');
   }
 
