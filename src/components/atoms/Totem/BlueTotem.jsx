// imports
import styled from 'styled-components/native'

// function
export default function Totem({ children }) {
  return (
    <TotemWrapper>
        {children}
    </TotemWrapper>
  )
}

// styles
const TotemWrapper = styled.View`
    width: 98px;
    height: 155px;
    
    background-color: #C0F1FF;
    
    padding: 3px;
    border-radius: 90px 90px 10px 10px;
    
    align-items: center;
    justify-content: center;
    gap: 12px;
`