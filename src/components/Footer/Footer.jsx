import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Styles from './Footer.styles'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <Styles.Wrapper>
      <Styles.FooterContainer>
        <Styles.Item>
          <Styles.FooterSubTitle>{t('contact')}:</Styles.FooterSubTitle>
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
          <Styles.FooterSubTitle>{t('support')}:</Styles.FooterSubTitle>
          <ul>
            <li>
              <Styles.SubItem
                coffee
                target="_blanck"
                href="https://buymeacoffee.com/gslayers"
              >
                {t('coffee')}
              </Styles.SubItem>
            </li>
          </ul>
        </Styles.Item>
      </Styles.FooterContainer>
      <Styles.Rights>© {t('rights')}</Styles.Rights>
    </Styles.Wrapper>
  )
}
