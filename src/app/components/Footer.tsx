import { h } from 'preact'
import { styled } from 'linaria/react'

import { RotateCcw, Github } from 'preact-feather'

import { Regular } from '../../styles/components/Text'

export default ({ optOutUrl }: { optOutUrl: string }) => (
  <Footer>
    <OuterContainer>
      <InnerContainer>
        <Copyright>
          <span> © 2019-2020 reflation </span>
        </Copyright>
        <Contacts>
          <ViewOrginalPage>
            <a href={optOutUrl}>
              <RotateCcw {...Icon} /> 원본 페이지 보기
            </a>
          </ViewOrginalPage>
          <span>
            <a href="https://github.com/reflation/extension">
              <Github {...Icon} /> @reflation/extension
            </a>
          </span>
        </Contacts>
      </InnerContainer>
    </OuterContainer>
  </Footer>
)

const footer_bg = '#e7e7e7'
const contactText = '#929292'

const Footer = styled.footer`
  display: flex;
  min-height: 8rem;
  align-items: center;
  background-color: ${footer_bg};

  @media screen and (max-width: 768px) {
    min-height: 12rem;
  }
`

const OuterContainer = styled.div`
  padding: 0 0.5rem;
  margin-right: auto;
  margin-left: auto;
  width: 90vw;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Copyright = styled.span`
  ${Regular}
  color: #b1b1b1;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`

const Contacts = styled.div`
  ${Regular}
  display: flex;
  padding: 12px;
  > * {
    color: ${contactText};
    padding: 4px;
  }
  a {
    text-decoration: none;
    color: ${contactText};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 0;
  }
`

const Icon = {
  color: contactText,
  size: 18,
  style: { verticalAlign: 'bottom' },
} as const

const ViewOrginalPage = styled.span`
  padding-right: 64px;
  @media screen and (max-width: 768px) {
    padding-right: unset;
    align-self: center;
  }
`
