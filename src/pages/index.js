import React from 'react'
import { Container, Row } from 'reactstrap'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './index.module.css'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    post =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === 'blog'
  )

  const conferences = data.postgres.allConferences.edges.map(n => n.node)

  return (
    <Layout>
      <Container>
        {posts.map(({ node: post }) => (
          <div key={post.id}>
            <h2>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>
            <p style={{ marginBottom: 10 }}>{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </Container>
      <Container className={styles.conferenceList}>
        <Row>
          {conferences.map(c => (
            <div className='col-md-4' key={c.path}>
              <div className={styles.conference}>
                <h4>
                  <Link to={c.path}>{c.title}</Link>
                </h4>
                <div>
                  <span>{c.location}</span>
                  <span className={styles.date}>{c.startDate}</span>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            hidden
          }
        }
      }
    }
    postgres {
      allConferences {
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
