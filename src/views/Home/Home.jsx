import React from 'react'
import { Container, Title, Button } from '@components/common/common.styles'
import {
  HomeContainer,
  HomeHeader,
  HomeText,
  HomeTitle,
  HomeSubTitle,
  StyledScrollIcon,
  HomeMain,
} from './Home.styles'

export default function Home() {
  return (
    <HomeContainer>
      <HomeHeader as="header">
        <HomeText>
          <HomeTitle>
            <span>G</span>
            <span>SLAYERS</span>
          </HomeTitle>
          <HomeSubTitle>laugh and joy</HomeSubTitle>
          <Button>OUR GAMES</Button>
        </HomeText>
        <StyledScrollIcon />
      </HomeHeader>

      <HomeMain as="main"></HomeMain>
    </HomeContainer>
  )
}
