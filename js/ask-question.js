var preference = prompt('what\'s your farorit animal? (lion, zebra or leopard');
var response;
if(preference === 'lion'){
    response = 'Lions are Great!';
}else if (preference === 'zebra'){
    response = 'Zebra are Fabulous!';
}else if (preference === 'leopard'){
    response = 'I personaly love Leopard! ;)'
}else {
    response = 'it\'s all good you do not have to answer :)';
}

document.write('<h3>'+ response +  '</h3>');
