import React, { ChangeEvent, useState } from 'react';
// import { Button } from 'antd';
import { ButtonComp, RectButton } from './react-storybook/src/stories/Button';


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
    <ButtonComp onClick={onAddNoteClick} label="Add Task" />
    <RectButton onClick={onAddNoteClick} label="Add Task" />
  </div>
)
};

