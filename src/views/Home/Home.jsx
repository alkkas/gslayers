import React from 'react'
import i18n from '@i18n'
import {
  Container,
  Title,
  Button,
  SubTitle,
} from '@components/common/common.styles'

import {
  HomeContainer,
  HomeHeader,
  HomeText,
  HomeTitle,
  HomeSubTitle,
  StyledScrollIcon,
  HomeMain,
  HomeItems,
  HomeItem,
  HomeItemImg,
  HomeMainTitle,
  StyledJeopardyImg,
  StyledAliasImg,
  Symbol,
  GameButton,
  HomeItemSubTitle,
  HomeWrapper,
} from './Home.styles'
import { Link } from 'react-router-dom'
import * as Scroll from 'react-scroll'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <HomeWrapper>
      <Symbol right={-60} top={-50} color="purp">
        ?
      </Symbol>

      <Symbol left={-60} top={300} color="red">
        &
      </Symbol>
      <HomeContainer>
        <HomeHeader as="header">
          <HomeText>
            <HomeTitle>
              <span>G</span>
              <span>SLAYERS</span>
            </HomeTitle>
            <HomeSubTitle>laugh and joy</HomeSubTitle>
            <Scroll.Link to="games">
              <Button>{t('games')}</Button>
            </Scroll.Link>
          </HomeText>
          <StyledScrollIcon />
        </HomeHeader>

        <HomeMain as="main">
          <Scroll.Element name="games">
            <HomeMainTitle>{t('our games')}</HomeMainTitle>
          </Scroll.Element>
          <HomeItems>
            <HomeItem>
              <HomeItemSubTitle>ALIAS</HomeItemSubTitle>
              <HomeItemImg>
                <StyledAliasImg viewBox="0 0 243 170" />
              </HomeItemImg>
              <Link to="/alias">
                <GameButton>{t('play')}</GameButton>
              </Link>
            </HomeItem>
            <HomeItem>
              <HomeItemSubTitle>JEOPARDY</HomeItemSubTitle>
              <HomeItemImg>
                <StyledJeopardyImg viewBox="0 0 255 178" />
              </HomeItemImg>
              <Link to="/jeopardy">
                <GameButton color="green">{t('play')}</GameButton>
              </Link>
            </HomeItem>
          </HomeItems>
        </HomeMain>
      </HomeContainer>
    </HomeWrapper>
  )
}
