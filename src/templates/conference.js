import React from "react";
import { Container } from "reactstrap";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({ data }) {
  const conference = data.postgres.allConferencesJson.edges[0].node;

  return (
    <Layout>
      <div>
        <Helmet title={`${conference.title}`} />
        <Container>
          <h1 className="display-3">{conference.title}</h1>
          <p>{conference.location}</p>
          <p>{conference.startDate}</p>
          <a href={conference.url}>{conference.url}</a>
        </Container>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ConferencePage($path: String!) {
    postgres {
      allConferencesJson: allConferences(condition: { path: $path }) {
        edges {
          node {
            path
            title
            location
            url
            startDate: startdate
          }
        }
      }
    }
  }
`;
