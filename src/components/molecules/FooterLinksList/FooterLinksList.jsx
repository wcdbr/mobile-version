// imports
import React from 'react';
import styled from 'styled-components/native';
import { FooterLinksData } from '../../../data/FooterLinksData';
import FooterLinkButton from '../../atoms/FooterLinkButton/FooterLinkButton';

// function
export default function FooterLinksList() {
  return (
    <FooterLinksListWrapper>
        {FooterLinksData.map((item) => (
          <FooterLinkButton key={item.link} link={item.link} text={item.text} />
        ))}
    </FooterLinksListWrapper>
  )
}

// styles
const FooterLinksListWrapper = styled.View`
  gap: 20px;
`
