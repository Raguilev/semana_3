const main =() =>{
    //1. Configurar el evento click del boton
    const but = document.getElementById("but_agregar")
    but?.addEventListener("click",()=>{
    // Agregar el texto del input en el ul
        //1. Obtener el texto del input 
        const input = document.getElementById("todo_text")
       if (input == null) return
       const todo = (input as HTMLInputElement).value
       if(todo==null) return
        //2. Agregarlo como hijo del ul
        const ul = document.getElementById("todos")

        const li = document.createElement("li")
        li.innerText = todo
        li.addEventListener("click", ()=>{
            ul?.removeChild(li)
        })

        ul?.appendChild(li)
        input.setAttribute("value","")
    })
        
}   

main()