import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterItem,
  FooterSubItem,
  FooterSubTitle,
  Rights,
} from './Footer.styles'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterItem>
          <FooterSubTitle>Contact us:</FooterSubTitle>
          <ul>
            <li>
              <FooterSubItem
                href="https://github.com/alkkas"
                github
                target="_blanck"
              >
                alkkas
              </FooterSubItem>
            </li>
            <li>
              <FooterSubItem
                href="https://github.com/xamelllion"
                github
                target="_blanck"
              >
                xamellion
              </FooterSubItem>
            </li>
          </ul>
        </FooterItem>
        <FooterItem>
          <FooterSubTitle>Support project:</FooterSubTitle>
          <ul>
            <li>
              <FooterSubItem
                coffee
                target="_blanck"
                href="https://buymeacoffee.com/gslayers"
              >
                buy us a coffee
              </FooterSubItem>
            </li>
          </ul>
        </FooterItem>
      </FooterContainer>
      <Rights>© All rights received</Rights>
    </FooterWrapper>
  )
}
