var today = new Date();
var hourNow = today.getHours();
var greeting;

// fining the hour is it by using the if statment
if(hourNow > 18){
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0){
    greeting = 'Good morning';
} else{
    greeting = 'Welcome!';
}

// displaying the "greeting with the h3 header"
document.write('<h3>' + greeting + '</h3>');