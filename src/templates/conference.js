import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './conference.module.css'

export default function Template ({ data }) {
  const conference = data.postgres.allConferences.edges[0].node

  return (
    <Layout>
      <div>
        <Helmet title={`${conference.title}`} />
        <Container>
          <h3>{conference.title}</h3>
          <div>
            <span>{conference.location}</span>
            <span class={styles.date}>{conference.startDate}</span>
          </div>
          <a href={conference.url}>{conference.url}</a>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ConferencePage($path: String!) {
    postgres {
      allConferences(condition: { statusid: 2, path: $path }) {
        edges {
          node {
            title
            path
            location
            startDate: startdate
          }
        }
      }
    }
  }
`
