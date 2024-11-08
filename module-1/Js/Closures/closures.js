function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('John')); 
 console.log(sayHello('John')); 



 for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}


for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}
