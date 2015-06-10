var test = require('tape'),
    schedule = require('../');

if(typeof requestAnimationFrame !== 'function'){
    global.requestAnimationFrame = function(fn){
        setTimeout(fn, 16);
    };
}

test('implicit key', function(t){
    t.plan(1);

    function foo(){
        t.pass();
    }

    schedule(foo);
    schedule(foo);
    schedule(foo);
});

test('explicit key', function(t){
    t.plan(1);

    var key = {};

    schedule(function(){
        t.pass();
    }, key);
    schedule(function(){
        t.pass();
    }, key);
    schedule(function(){
        t.pass();
    }, key);
});

test('different implicit key', function(t){
    t.plan(3);

    schedule(function(){
        t.pass();
    });
    schedule(function(){
        t.pass();
    });
    schedule(function(){
        t.pass();
    });
});

test('different explicit key', function(t){
    t.plan(3);

    function foo(){
        t.pass();
    }

    schedule(foo, {});
    schedule(foo, {});
    schedule(foo, {});
});

test('mix', function(t){
    t.plan(2);

    function foo(){
        t.pass();
    }

    schedule(foo);
    schedule(foo, {});
    schedule(foo);
});

test('error on non-fn', function(t){
    t.plan(1);

    t.throws(function(){
        schedule(null);
    });
});