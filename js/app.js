var preference;
function askQuestion() {
    preference = prompt('what\'s your farorit animal? (lion, zebra or leopard)');
    while(preference !== 'lion' && preference!== 'zebra' && preference != 'leopard'){
        preference = prompt('PLEASE! choose between the three animals there (lion, zebra or leopard)');
    }
    return preference;
}


function ansewrQuestion(){
    preference = askQuestion();
    var response;
    if (preference === 'lion') {
            response = 'Lions are Great!';
    } else if (preference === 'zebra') {
            response = 'Zebra are Fabulous!';
    } else if (preference === 'leopard') {
            response = 'I personaly love Leopard! ;)'
    } 
    return  response;
    
}
    

function greeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    // fining the hour is it by using the if statment
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning';
    } else {
        greeting = 'Welcome!';
    }

    // displaying the "greeting with the h3 header"
    return document.write('<h3>' + greeting + '</h3>');
}

function welcome() {
    var name = prompt('Hey you! what is your name?');
    var message = 'Salut ' + name + ' j\'espere que tu vas bien'

    return document.write('<h3>' + message + '</h3>');
}
 function showImages(){
     var result = '';
     var item = preference; 
    response = prompt('from 1 to 5 how much do you like ' + item);
    if (item === 'lion'){
        item = '<img src="https://static01.nyt.com/images/2019/07/21/arts/21lionking-sci-2/21lionking-sci-2-videoSixteenByNineJumbo1600.jpg" width="95%" height="345">';
    } else if(item === 'zebra'){
        item = '<img src="https://s.abcnews.com/images/Technology/zebra-stripes-gty-jt-190613_hpMain_12x5_992.jpg" width="95%" height="345">';
    }else if (item === 'leopard'){
        item= '<img src="https://cdn9.dissolve.com/p/D256_55_203/D256_55_203_1200.jpg" width="95%" height="345">';
    }
    for(var i = 0 ; i < response; i++){
        result += '<p>'+ item + '</p>';
    }
    return document.write(result);
 }