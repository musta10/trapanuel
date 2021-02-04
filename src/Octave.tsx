import React from 'react'
import  {NoteType} from './helpers'
import styled from 'styled-components'
import Notas from './Notas'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`


type Props = {
    notes: NoteType[];
    clickHandler: (e: React.MouseEvent <HTMLButtonElement>) => void;
}

const Octave: React.FC<Props> = ({ notes, clickHandler }) => (
    <Wrapper>
    <div>
        {notes.map((element: NoteType) => (
            <Notas 
            key={element.note}
            color={element.color}
            note={element.note}
            clickHandler={clickHandler} />
        ))}
    </div>
    </Wrapper>
)

export default Octave;