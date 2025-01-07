// imports
import styled from 'styled-components/native'

import FooterLinksList from '../../molecules/FooterLinksList/FooterLinksList'
import FooterWarn from '../../atoms/FooterWarn/FooterWarn'
import FooterGlutenInfo from '../../atoms/FooterGlutenInfo/FooterGlutenInfo'
import FooterCopyright from '../../atoms/FooterCopyright/FooterCopyright'

// function
export default function AppFooter() {
  return (
    <AppFooterWrapper>
        <AppFooterInfo>
            {/* footer links: */}
            <FooterLinksList/>

            {/* footer warn: */}
            <FooterWarn>
                O ministério da saúde informa: Após os 6 meses de idade, continue amamentando seu filho e forneça novos alimentos.
            </FooterWarn>

            {/* footer gluten info: */}
            <FooterGlutenInfo/>
        </AppFooterInfo>
        <FooterCopyright/>
    </AppFooterWrapper>
  )
}

// styles
const AppFooterWrapper = styled.View`
    margin-bottom: 140px;
`
const AppFooterInfo = styled.View`
    padding: 27px 32px;
    gap: 20px;
    background-color: #DDF7FF;
`