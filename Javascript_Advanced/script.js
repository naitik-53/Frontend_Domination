//Lets Learn About Scope
//--Scope Ha ki aap apne created variables aur functions ko kahan tak use kar sakte ho 

function hello(){
    var a = 12;
    console.log(a);
}

hello();

//Let's Learn Ki clousers kya hote ha right sabse pehle mai aaap logon ko batata chahta hu ki 

function hello(){
    var a = 12;
    return function(){
        console.log(a);
    }
}

hello();