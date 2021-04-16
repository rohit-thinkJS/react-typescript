import React, { ChangeEvent, useState } from 'react';
import { Button } from 'antd';


interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
  const [note,setNote] = useState('')

  const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note)
    setNote('')
  }


return (
  <div>
    <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
    {/* <Button onClick={onAddNoteClick} label={"Add"} /> */}
    <Button onClick={onAddNoteClick} type="primary">Add Task</Button>
  </div>
)
};

