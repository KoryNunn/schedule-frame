# schedule-frame

Schedule some work to run only once on the next frame

## Usage

Schedule a task:

```
var schedule = require('schedule-frame');

function doStuff(){
    // do stuff
}

schedule(doStuff);
```

attempting to schedule the same task more than once per frame:

```
schedule(doStuff);
schedule(doStuff);
schedule(doStuff);
```

will result in the task running only once.

If you need to pass a new function in each call but still only want the last one run, you can used a unique task key:

```
var myKey = {}; // new object instance, can't clash with anything else.

schedule(function(){
    // do things
}, myKey);
```

## How is this different to requestAnimationFrame

requestAnimationFrame will run the funciton passed to it on the next frame. If you pass it the same function within the same frame, it will run it twice.