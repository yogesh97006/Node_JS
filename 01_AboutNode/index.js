// const Value = 1000
const Value = {
    Func1 : (V1,V2)=>{
       return ((V1/V2))
    },
    Func2 : (V1,V2)=>{
        return ((V1/V2)*100)
    }
}

// console.log(Value);

//* Every Thing in Node is Module It can be a simple function or Complex Function or any variable or any thing 

//*  to export any value from file to another we have to export that file

module.exports = Value


//?  there are three types of module
//? file base module, in built module , third party(express)
//? these is file base module