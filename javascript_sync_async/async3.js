// ✅Example1

// const promise=new Promise(function(resolve, reject) {
//     resolve('I am a promise');
// }).then(resolve => console.log(resolve));

// promise.then(result=>console.log(result));



// ✅Example2

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    setTimeout(f1, 0);

    new Promise(function(resolve, reject) {
        resolve('I am a promise');
    }).then(resolve => console.log(resolve));

    f2();
}

main();


// handler ->then, catch, finally
