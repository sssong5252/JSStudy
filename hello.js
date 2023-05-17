function helloSomeone(value) {
    if(value === '')
        console.log("Who are you");
    
    else if(typeof(value) === 'string')
        console.log("Hello " + value + "!");
    
    else if(value === null)
        console.log("I am null and void");

    else if(typeof(value) === 'number' && value < 0)
        console.log("I am Benjamin Button!")
    
    else if(typeof(value) === 'number')
        if(Number.isNaN(value))
            console.log("Age is just a number");  
        else
            console.log("My age is " + value);
        
    else if(value === undefined)
        console.log("Nobody can define me");
}

helloSomeone("42");
helloSomeone("");
helloSomeone(null);
helloSomeone(42);
helloSomeone(-1);
helloSomeone(NaN);
helloSomeone(undefined);