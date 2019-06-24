import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import { media } from '../styles/media'

import { graphql } from 'gatsby'
import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import { Wrapper } from '../components/Layout.Wrapper'
import {
  Hero,
  HeroTitle,
  HeroSubTitle,
  HeroContent,
} from '../components/Common.Hero'

import { EmailForm } from '../components/Home.EmailForm'
import { Footer } from '../components/Layout.Footer'

import background from '../images/hero/home-bg.svg'
import overlay from '../images/hero/home-overlay.svg'

const FormCard = styled.div`
  background-color: #eee;
  padding: 2em;
  border-radius: 4px;
  position: relative;
  top: -200px;
  color: #666;
  max-width: 500px;
  margin-bottom: 20px;

  ${media.largePhone`
    max-width: 100%;
  `};
`

const ContactCard = styled.div`
  background-color: #eee;
  padding: 2em 2em 1em;
  border-radius: 4px;
  position: relative;
  top: -200px;
  color: #666;
  max-width: 500px;

  ${media.largePhone`
    max-width: 100%;
  `};
`

const CardHeader = styled.div`
  font-size: 1em;
  font-weight: 500;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
  margin-bottom: 30px;
`

const ContactPoint = styled.div`
  font-size: 1em;
  font-weight: 300;
  padding-bottom: 10px;
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
`

const ContactPointIcon = styled.div`
  margin-right: 10px;
`

const ContactPointText = styled.div`
  font-size: 1em;
  font-weight: 300;
`

export default function ContactPage({ data }) {
  const { allPagesYaml } = data
  const pageData = allPagesYaml.edges[0].node

  return (
    <Layout>
      <div>
        <TitleAndMetaTags title="Contact" pathname="contact" />
        <Hero
          backgroundImage={background}
          backgroundColor={'#EFAD2D'}
          overlay={overlay}
        >
          <Wrapper>
            <HeroTitle>
              <span style={{ fontWeight: 100 }}>{pageData.title}</span>
            </HeroTitle>
            <HeroSubTitle>{pageData.subtitle}</HeroSubTitle>
            <HeroContent>{pageData.content}</HeroContent>
          </Wrapper>
        </Hero>
        <Wrapper>
          <FormCard>
            <EmailForm />
          </FormCard>
          <ContactCard>
            <CardHeader>Reach Out</CardHeader>
            <ContactPoint>
              <ContactPointIcon>
                <i className="fas fa-map-marked-alt" />
              </ContactPointIcon>
              <ContactPointText>{pageData.address}</ContactPointText>
            </ContactPoint>

            <ContactPoint>
              <ContactPointIcon>
                <i className="fas fa-at" />
              </ContactPointIcon>
              <ContactPointText>{pageData.email}</ContactPointText>
            </ContactPoint>
          </ContactCard>
        </Wrapper>
        <Footer
          backgroundImage={background}
          backgroundColor={'#24C8D8'}
          overlay={overlay}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query contactQuery {
    allPagesYaml(filter: { id: { eq: "contact" } }) {
      edges {
        node {
          title
          subtitle
          address
          email
          content
        }
      }
    }
  }
`

ContactPage.propTypes = {
  data: PropTypes.object,
}
