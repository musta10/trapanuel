import React from 'react'
import  {NoteType} from './helpers'
import Notas from './Notas'
type Props = {
    notes: NoteType[]
}

const Octave: React.FC<Props> = ({ notes }) => (
    <div>
        {notes.map((element: NoteType) => (
            <Notas 
            key={element.note}/>
        ))}
    </div>
)

export default Octave;