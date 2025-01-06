// imports
import styled from 'styled-components/native'

// function
export default function Title({ children, style }) {
  return (
    <TitletWrapper style={style}>
        {children}
    </TitletWrapper>
  )
}

// styles
const TitletWrapper = styled.Text`
    width: 300px;
    flex-shrink: 0;
    
    color: #1F4598;
    font-family: Bariol;
    font-size: 24px;
  `
