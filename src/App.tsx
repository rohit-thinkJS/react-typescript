import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NewNoteInput } from './NewNoteInput'
import { NotesState} from './reducers/notesReducer'

function App() {

  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) => {
      dispatch({type: "ADD_NOTE", payload: note})
  }

  console.log(notes)
//   if(!notes) return (<p>Loading...</p>)


  return (
      <p>
      <NewNoteInput addNote={addNote} />
      <ul>
          {/* {
              notes.map((note) => {
                  return <li key={note}>{note}</li>
              })
          } */}
      </ul>
    </p>
  );
}

export default App;