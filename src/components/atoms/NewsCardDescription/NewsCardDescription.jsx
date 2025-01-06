// imports
import styled from 'styled-components/native'
import Description from '../Description/Description'

// function
export default function NewsCardDescription({ children }) {
  return (
    <NewsCardDescriptionWrapper>
        <DescriptionText>
          {children}
        </DescriptionText>
    </NewsCardDescriptionWrapper>
  )
}

// styles
const NewsCardDescriptionWrapper = styled.View`
    width: 200px;
    height: 200px;
`
const DescriptionText = styled(Description)``