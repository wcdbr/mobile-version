// imports
import styled from 'styled-components/native'

// function
export default function Card({ children, style }) {
  return (
    <CardWrapper style={style}>
        {children}
    </CardWrapper>
  )
}

// styles
const CardWrapper = styled.View`
    position: relative;

    min-width: 97%;
    max-width: 97%;
    min-height: 350px;
    max-height: 350px;

    justify-self: center;
    align-self: center;
    
    align-items: center;
    
    padding: 7.5px;
    border-radius: 5px;
    border: 1px solid lightgray;
`