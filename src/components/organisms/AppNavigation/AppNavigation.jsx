// imports
import styled from 'styled-components/native'

import { NavIconsData }  from '../../../data/NavIconsData'
import AppNavButton from '../../atoms/AppNavButton/AppNavButton'

// function
export default function AppNavigation() {
  return (
    <AppNavigationWrapper>
        {NavIconsData.map((item, index) => (
            <AppNavButton 
                key={index} 
                icon={item.icon}
            />
        ))}
    </AppNavigationWrapper>
  )
}

// styles
const AppNavigationWrapper = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
    
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 56px;
    background-color: #DDF7FF;
`