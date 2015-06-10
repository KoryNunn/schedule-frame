var todo = [],
    todoKeys = [];

function run(){
    var startTime = Date.now();

    while(todo.length){
        todoKeys.shift();
        todo.shift()();
    }
}

function schedule(fn, key){
    if(arguments.length < 2){
        key = fn;
    }

    if(typeof fn !== 'function'){
        throw 'schedule must be passed a function as the first parameter';
    }

    var keyIndex = todoKeys.indexOf(key)

    if(~keyIndex){ 
        // Replace task for key
        todo.splice(keyIndex, 1, fn);
        return;
    }

    if(todo.length === 0){
        requestAnimationFrame(run);
    }

    todo.push(fn);
    todoKeys.push(key);
}

module.exports = schedule;