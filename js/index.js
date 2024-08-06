const container = document.querySelector(".container")
const addBtn = document.querySelector(".add-note")

const createNotes = () => {
    const notes = document.createElement("div")
    notes.classList.add("notes")

    const paragraph = document.createElement("p")
    paragraph.classList.add("input-note")
     paragraph.setAttribute("contenteditable" , "true")

     const actions = document.createElement("div")
     actions.classList.add("actions")

     const edit = document.createElement("i")
     edit.classList.add("bx")
     edit.classList.add("bx-edit-alt")
     edit.classList.add("edit")


  const deleteBtn = document.createElement("i")
     deleteBtn.classList.add("bx")
     deleteBtn.classList.add("bx-message-square-x")
     deleteBtn.classList.add("delete")

     const saveBtn = document.createElement("i")
     saveBtn.classList.add("bx")
     saveBtn.classList.add("bx-save")
     saveBtn.classList.add("save")


     actions.appendChild(edit)
     actions.appendChild(saveBtn)
     actions.appendChild(deleteBtn)

   
      notes.appendChild(paragraph)
      notes.appendChild(actions)

      container.appendChild(notes)

      saveToStorage(notes)
      getData()

      saveBtn.addEventListener("click" , ()=>{
        if(saveBtn.classList.contains("bx-save")){
               paragraph.removeAttribute("contenteditable")
               paragraph.focus()
               console.log(true)
               saveToStorage(notes)
        }else{
            console.log(false)
        }
      
        return
      })


      edit.addEventListener("click" , ()=> {
        if(edit.classList.contains("bx-edit-alt")){
            paragraph.setAttribute("contenteditable" , "true")
            console.log(true)
            saveToStorage(note)
        }else{
            
        }
        return
      })

      deleteBtn.addEventListener("click" , ()=> {
        if(deleteBtn.classList.contains("bx-message-square-x")){
            notes.remove()
            console.log(true)
            saveToStorage(notes)
        }else{
            
        }
        return

      })
}


//  come back and store data in local storage , this code isnt working
const saveToStorage = (notes)=> {
    localStorage.setItem("note" , notes )
}
const getData = (notes) => {
   notes = localStorage.getItem("note")
}


addBtn.addEventListener("click" , createNotes)