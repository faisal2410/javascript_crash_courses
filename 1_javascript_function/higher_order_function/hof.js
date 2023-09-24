function getCamera(){
    return "Canon";
}

function getCapture(camera){
     camera();
}

function returnFunc(){
    return function(){
        console.log("Hi");
    }

}

returnFunc()();