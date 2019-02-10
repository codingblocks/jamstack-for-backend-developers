import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styles from './conference.module.css'

export default function Template ({ pageContext }) {
  const conference = pageContext.conference
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
