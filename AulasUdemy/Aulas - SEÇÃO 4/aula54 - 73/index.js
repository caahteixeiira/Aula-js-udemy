

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log();

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback){
    setTimeout(function(){
        if (callback) callback();
    }, rand());
}

function f3(callback){
    setTimeout(function(){
        if (callback) callback();
    }, rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log("Olá mundo");
        });
    });
});

console.log('Olá Mundo!');