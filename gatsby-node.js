const path = require("path");

const generateContentPages = (actions, markdownData) => {
  const { createPage } = actions;
  markdownData.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.contentType)}.js`
      ),
      context: {} // additional data can be passed via context
    });
  });
};

const generateConferencePages = (actions, markdownData) => {
  const { createPage } = actions;
  markdownData.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve(`src/templates/conference.js`),
      context: {} // additional data can be passed via context
    });
  });
};

exports.createPages = ({ actions, graphql }) => {
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              contentType
              path
            }
          }
        }
      }
      postgres {
        allConferencesJson: allConferences {
          edges {
            node {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    generateContentPages(actions, result.data.allMarkdownRemark.edges);
    generateConferencePages(
      actions,
      result.data.postgres.allConferencesJson.edges
    );
  });
};
