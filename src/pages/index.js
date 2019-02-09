import React from "react";
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(
    post =>
      !post.node.frontmatter.hidden &&
      post.node.frontmatter.contentType === "blog"
  );

  const conferences = data.postgres.allConferencesJson.edges.map(n => n.node);

  return (
    <Layout>
      <Container>
        {posts.map(({ node: post }) => (
          <Card style={{ marginBottom: 10 }} key={post.id}>
            <CardBody>
              <CardTitle>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </CardTitle>
              <CardSubtitle style={{ marginBottom: 10 }}>
                {post.frontmatter.date}
              </CardSubtitle>
              <CardText>{post.excerpt}</CardText>
            </CardBody>
          </Card>
        ))}
      </Container>
      <Container>
        {conferences.map(c => (
          <div key={c.path}>
            <p>
              <Link to={c.path}>{c.title}</Link>
            </p>
            <p>{c.location}</p>
            <p>{c.startDate}</p>
          </div>
        ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;

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
      allConferencesJson: allConferences {
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
`;
