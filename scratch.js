// scratch file

//---------------------
// Below is some mad attempt at constructing a weird object so we can execute commands from strings in window context. Hacky as fuck.

// Make a function which takes an array and turns it into a nested object,
// with each item of the array becoming a string that is a key for another object.
//
// a = ['foo','bar','baz];
// o = { 'foo': {'bar':{'baz'}}}
//
// then we can use object like this: o['foo']['bar']['baz']


list = ['foo','bar','baz'];
tempObj = {};
extendObjectWithString(tempObj, list[0]);

for (i in list){
    console.log(i);
    // make a temp object
    o = {};
    // add them from the last to the first ??
    extendObjectWithString( o, list[list.length - i]);

    console.log("Extended: ",o);

    if (list[i+1] != 'undefined'){
        o[list[i]] = extendObjectWithString( o, list[i+1] );
    }

    console.log(o);

    // add o into the tempObj
    // for (var j=0; j<i; j++){
    // }

    // if ( tempObj.hasOwnProperty(temp[i]) ){
    //  tempObj[temp[i]] = {};
    // }
}



function extendObjectWithString( obj, string ) {
   return obj[string] = {};
}
