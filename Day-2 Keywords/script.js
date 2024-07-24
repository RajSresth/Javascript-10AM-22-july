// Topic-1: var Keyword
let a=1;

    //Local Scope:- chrome:- block, firefox:- block
    {
        let a=10;
        console.log(a)       //10
    }

console.log(a)  //1

/* firefox
block:- local scope
global
block */

/*chrome
block:- local scope
global
script */