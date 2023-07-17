var sentence =function(sent){
    var i=0;   
    var num_char=1;
    var num_words=1;
    var num_vowels=0;
    var vowels=["a","e","i","o","u","y"];
    while(sent[i]!== "."){
    num_char=num_char+1;
    if(sent[i]===" "){
    num_words=num_words+1;    
    }
    if(vowels.includes(sent[i])){
    num_vowels=num_vowels+1;    
        
    }
    i++;
    }    
        
    console.log(num_char,num_words,num_vowels);    
        
    }
    
    sentence("Checkpoint Algorithms and its elements.");
    
    
    