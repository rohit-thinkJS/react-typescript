import React from 'react';
import {useSelector, useDispatch, connect} from 'react-redux'
import { NewNoteInput } from './NewNoteInput'
import { NotesState} from './reducers/notesReducer'



function App() {

  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) => {
      dispatch({type: "ADD_NOTE", payload: note})
  }

//   console.log(typeof notes)
  let notesArray = []
  notesArray = Object.values(notes)
  console.log(notesArray)
//   if(!notes) return (<p>Loading...</p>)

//  const getNotes = () => {
//      console.log(Array.isArray(notes))
//      notesArray = Object.values(notes)
//      return notesArray.map((note, index) => {
//         return note
//         })
//  }
// let notess = getNotes()[0]
// console.log(typeof notess)

return (
      <div>
      <NewNoteInput addNote={addNote} />
      <ul>
          {/* {getNotes()} */}
          {/* {
              Array.isArray(notes) ?  : "No data"
          } */}
          {
              notesArray.map((note,index) => {
                  return <li key={index}>{note}</li>
              })
          }
      </ul>
    </div>
  );
}

// interface IRootState {
//   state: IAppState;
// }

const mapStateToProps = (state: NotesState) => {
    return {state}
}


export default connect(mapStateToProps, null)(App);
