// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function NewsCardTitle({ children }) {
  return (
    <NewsCardTitleWrapper>
        {children}
    </NewsCardTitleWrapper>
  )
}

// styles
const NewsCardTitleWrapper = styled(Title)`
    width: 240px;
`