// imports
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'

// function
export default function NewsCardImage({ cardImage }) {
  return (
    <NewsCardImageWrapper source={cardImage} />
  )
}

// styles
const NewsCardImageWrapper = styled(ImageBackground)`
  width: 80px;
  height: 378px;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
`