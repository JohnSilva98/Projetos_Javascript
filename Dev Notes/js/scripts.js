// elementos
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNotebtn = document.querySelector(".add-note")
// funções
function showNotes() {
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed)

    notesContainer.append(noteElement)
  })
}

function addNote() {
  const notes = getNotes()

  const noteObj = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  }
  const noteElement = createNote(noteObj.id, noteObj.content)

  notesContainer.append(noteElement)

  notes.push(noteObj)

  saveNotes(notes)

  noteInput.value = ""
}
function generateId() {
  return Math.floor(Math.random() * 5000)
}

function createNote(id, content, fixed) {
  const element = document.createElement("div")
  element.classList.add("note")
  const textarea = document.createElement("textarea")
  textarea.value = content
  textarea.placeholder = "Adicione algum texto..."
  element.appendChild(textarea)

  return element
}
// local storage

function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]")

  return notes
}
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes))
}
// eventos

addNotebtn.addEventListener("click", () => addNote())

// start
showNotes()
