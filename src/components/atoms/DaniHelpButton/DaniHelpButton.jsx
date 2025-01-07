// imports
import styled from 'styled-components/native'

// function
export default function DaniHelpButton() {
  return (
    <DaniHelpButtonWrapper>
        <DaniHelpButtonText>
            Oi, sou a Dani, posso te ajudar?
        </DaniHelpButtonText>
    </DaniHelpButtonWrapper>
  )
}

// styles
const DaniHelpButtonWrapper = styled.View`
    position: absolute;
    right: 0;
    bottom: 64.7px;
    z-index: 1;
    
    width: 300px;
    height: 62.7px;

    justify-content: center;
    padding-right: 16px;
    border-radius: 53px 0 0 53px;

    background-color: #1F4598;
`
const DaniHelpButtonText = styled.Text`
    color: #FFF;
    font-size: 15px;
    text-align: right;
`