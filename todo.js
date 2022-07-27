let todos =[];
let input;
if (todos.length===0){
    while (input !== "new"){
    input = prompt("What would you like to do");
    }
    while (input === "new"){
        todos.push(prompt("Enter new todo"));
        console.log(`${todos[todos.length-1]} added to the list`);
        input = prompt("What would you like to do");
        if (todos.length > 0 && input !== "new") {
            while(input==="list"){
                console.log("**********");
                for(let i = 0; i<todos.length;i++){
                console.log(`${i}: ${todos[i]}`);
                }
                console.log("**********");
                input = prompt("What would you like to do");
            }while(input==="delete"){
                let index = prompt("Enter index of todo to delete");
                todos.splice(index,1);
                console.log("Todo removed");
                input = prompt("What would you like to do");
                if (input === "list"){
                    while(input==="list"){
                        console.log("**********");
                        for(let i = 0; i<todos.length;i++){
                        console.log(`${i}: ${todos[i]}`);
                        }
                        console.log("**********");
                        input = prompt("What would you like to do");
                    }
                }
            }
            if (input==="quit"){
                console.log("Ok, You Quit The App");
                break;
            }
        }
        
    }
    // console.log(todos);
}