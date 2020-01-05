import { h } from 'preact'
import { cx, css } from 'linaria'

import { RotateCcw, Github } from 'preact-feather'

import { Regular } from '../../styles/components/Text'

export default ({ optOutUrl }: { optOutUrl: string }) => (
  <footer class={Footer}>
    <div class={OuterContainer}>
      <div class={InnerContainer}>
        <span class={Copyright}>
          <span> © 2019 reflation </span>
        </span>
        <div class={Contacts}>
          <span class={ViewOrginalPage}>
            <a href={optOutUrl}>
              <RotateCcw {...Icon} /> 원본 페이지 보기
            </a>
          </span>
          <span>
            <a href="https://github.com/reflation">
              <Github {...Icon} /> github.com/reflation
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
)

const footer_bg = '#e7e7e7'
const contactText = '#929292'

const Footer = css`
  display: flex;
  min-height: 8rem;
  align-items: center;
  background-color: ${footer_bg};

  @media screen and (max-width: 768px) {
    min-height: 12rem;
  }
`

const OuterContainer = css`
  padding: 0 0.5rem;
  margin-right: auto;
  margin-left: auto;
  width: 90vw;
`

const InnerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Copyright = cx(
  Regular,
  css`
    color: #b1b1b1;
    @media screen and (max-width: 768px) {
      align-self: center;
    }
  `
)

const Contacts = cx(
  Regular,
  css`
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
)

const Icon = {
  color: contactText,
  size: 18,
  style: { verticalAlign: 'bottom' },
} as const

const ViewOrginalPage = css`
  padding-right: 64px;
  @media screen and (max-width: 768px) {
    padding-right: unset;
    align-self: center;
  }
`
