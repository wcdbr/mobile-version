// imports
import styled from 'styled-components/native'

// function
export default function NewsCardCategoryFlag({ children }) {
  return (
    <NewsCardCategoryFlagWrapper>
      {children}
    </NewsCardCategoryFlagWrapper>
  )
}

// styles
const NewsCardCategoryFlagWrapper = styled.Text`
  width: 80px;
  height: 38px;
  padding: 8px;

  font-size: 14px;
  color: #fff;
  text-transform: lowercase;
  text-align: center;
  line-height: 20px;
 
  background-color: #1F4598;
  border-radius: 10px;
`