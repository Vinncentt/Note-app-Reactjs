import React from 'react'
import notes from '../assets/data'
import {Listitem} from '../components/Listitem'


export const NotesListPage = () => (
  <div>
    <div className="notes-list">
      {notes.map((note, index)=> (
        <Listitem key={index} note={note}/>
      ))}
    </div>
  </div>
)
