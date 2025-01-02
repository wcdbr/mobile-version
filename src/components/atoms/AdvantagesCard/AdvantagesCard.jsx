// imports
import styled from 'styled-components/native'
import Card from '../Card/Card'

// function
export default function AdvantagesCard({ children, cardImagePath }) {
  return (
    <AdvantagesCardWrapper>
        <AdvantagesCardImageWrapper>
            <AdvantagesCardImage resizeMode='contain' source={cardImagePath}/>
        </AdvantagesCardImageWrapper>
        
        {children}
    </AdvantagesCardWrapper>
  )
}

// styles
const AdvantagesCardWrapper = styled(Card)`
    padding: 0;
`
  
    // image wrapper & component
const AdvantagesCardImageWrapper = styled.View`
    width: 100%;
    height: 167px;
`
const AdvantagesCardImage = styled.Image`
    width: 100%;
    height: 167px;
`