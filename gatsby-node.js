const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const workTemplate = path.resolve('src/templates/workTemplate.js');

  // Add page routes for work markdown files
  return graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/work/" } }) {
        edges {
          node {
            frontmatter {
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

    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
        context: {},
      });
    });
  });
};
