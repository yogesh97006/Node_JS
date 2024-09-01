const EventEmitter = require('events')

const event = new EventEmitter()

event.on("Cources",(Name,Role)=>{
      console.log(`The Cource I am Preparing for ${Name} and The Role is ${Role} `);
      
})

event.on("Cources",()=>{
    console.log("The Roles Have Nice Package");
    
})

event.emit("Cources","JS","Web Developer")
event.emit("Cources","Java","Andriod Studio")