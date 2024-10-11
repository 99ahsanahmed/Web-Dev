//* Importing node File System
const fs = require("fs");

//* Creating File
const filePath = "./tasks.json"


//*  Command will look like this in CLI:
//!  node todo.js add "buy hard drive"
const command = process.argv[2]
const task = process.argv[3]


//*Load Task method
const loadTask = () =>{
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}


//* Save task method
const saveTasks = (tasks)=>{
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath , dataJSON) 
}


//* Add task method
const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({task});
  saveTasks(tasks);
  console.log(`Task added : `, task);
};


//* Structure 
if(command === "add"){
    addTask(task);
}
else if(command === "list"){
    listTasks()
}
else if (command === "remove") {
    removeTask(parseInt(task));
} else {
  console.log("command not found");
}