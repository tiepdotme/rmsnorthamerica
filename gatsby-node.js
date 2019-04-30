const path = require('path');

// Posts
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            posts: allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 1000) {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `).then(({ data, errors }) => {
        if (errors) {
            throw errors;
        }

        const { posts } = data;
        const total = posts.edges.length;
        const archive = 'post';

        // Posts - Single
        posts.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === total - 1 ? null : posts.edges[index + 1].node;
            const next = index === 0 ? null : posts.edges[index - 1].node;
            createPage({
                path: `/${archive}/${slug}`,
                component: path.resolve('./src/templates/single-post.js'),
                context: {
                    slug,
                    previous,
                    next,
                    archive,
                    total,
                },
            });
        });
    });
};
