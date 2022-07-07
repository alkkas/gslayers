import styled, { css } from 'styled-components'

export const colors = {
  purp: '#9883BF',
  lightRed: '#F49497',
  red: '#EF3F6F',
  orange: '#FCC566',
  green: '#3CBDA4',
  gray: 'rgba(166, 166, 166, 1)',
  white: '#ffffff',
}
export const breakpoints = {
  phone: '360px',
  tablet: '572px',
  desktop: '768px',
}
export const fontSizes = {
  esm: `1rem`, //11
  sm: '1.1rem', //14
  m: '1.3rem', //16
  l: '1.6rem', //24
  st: '2.7rem', //32
  t: '3rem', //36
}

export const Wrapper = styled.section``

export const Container = styled.section`
  padding: 0 15px;
`
export const Button = styled.button`
  cursor: pointer;
  border: 0;
  color: ${colors.white};
  background: ${props =>
    props.background ? colors[props.background] : colors.orange};
  border-radius: 5px;
  font-size: ${fontSizes.l};
  padding: 10px 25px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease all;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: translate(0, 0);
  }
`
export const AliasUiContainer = styled(Container)`
  max-width: 572px;
  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 768px;
  }
`
export const createMedia = (
  cssProp, // the CSS property to apply to the breakpoints
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = 'max-width', // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
  cssPropUnits = 'px' // the units of the CSS property (can set equal to "" and apply units to values directly)
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ]
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `)
  }, '')
  return css([breakpointProps])
}

export const Title = styled.h1`
  font-size: ${fontSizes.t};
  font-weight: 900;
`

export const SubTitle = styled.h2`
  font-size: ${fontSizes.st};
  font-weight: 700;
`

export const LargeText = styled.p`
  font-size: ${fontSizes.l};
  font-weight: 500;
`

export const MediumText = styled.p`
  font-size: ${fontSizes.m};
  font-weight: 400;
`

export const SmallText = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 300;
`

export const ExtraSmallText = styled.p`
  font-size: ${fontSizes.esm};
  font-weight: 200;
`
