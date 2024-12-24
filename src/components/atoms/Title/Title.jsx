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
    max-width: 290px;
    height: 113px;
    flex-shrink: 0;
    
    color: #1F4598;
    font-family: BariolRegular;
    font-family: Bariol;
    font-size: 24px;
    font-weight: 400;
  `
