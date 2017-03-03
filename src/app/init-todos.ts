export class Init{

    load(){ 
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log("no todos found!!");
            var todos =  [
                {
                      text:"Complete up with angular tutorials fast"
                },
                {
                     text : "complete the website for employee management system"
                },
                {
                    text : "have fun with the family"
                }
            ];

            localStorage.setItem('todos',JSON.stringify(todos));
            return;
        }
        else{
             console.log("Todos exists..");
         }
    }

}