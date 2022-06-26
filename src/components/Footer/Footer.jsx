import React from 'react'
import * as Styles from './Footer.styles'

export default function Footer() {
  return (
    <Styles.Wrapper>
      <Styles.FooterContainer>
        <Styles.Item>
          <Styles.FooterSubTitle>Contact us:</Styles.FooterSubTitle>
          <ul>
            <li>
              <Styles.SubItem
                href="https://github.com/alkkas"
                github
                target="_blanck"
              >
                alkkas
              </Styles.SubItem>
            </li>
            <li>
              <Styles.SubItem
                href="https://github.com/xamelllion"
                github
                target="_blanck"
              >
                xamellion
              </Styles.SubItem>
            </li>
          </ul>
        </Styles.Item>
        <Styles.Item>
          <Styles.FooterSubTitle>Support project:</Styles.FooterSubTitle>
          <ul>
            <li>
              <Styles.SubItem
                coffee
                target="_blanck"
                href="https://buymeacoffee.com/gslayers"
              >
                buy us a coffee
              </Styles.SubItem>
            </li>
          </ul>
        </Styles.Item>
      </Styles.FooterContainer>
      <Styles.Rights>© All rights received</Styles.Rights>
    </Styles.Wrapper>
  )
}
