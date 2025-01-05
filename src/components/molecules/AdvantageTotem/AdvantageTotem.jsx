// imports
import styled from 'styled-components/native'

import Totem from '../../atoms/Totem/BlueTotem'
import TotemTitle from '../../atoms/TotemTitle/TotemTitle'
import TotemIcon from '../../atoms/TotemIcon/TotemIcon'

// function
export default function AdvantageTotem({ iconSource, title }) {
  return (
    <AdvantageTotemWrapper>
        <TotemIcon iconSource={iconSource}/>
        <TotemTitle>
            {title}
        </TotemTitle>
    </AdvantageTotemWrapper>
  )
}

// styles
const AdvantageTotemWrapper = styled(Totem)``