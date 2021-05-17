module.exports = {
  mapping: {
    'Mdx.frontmatter.technologies': 'TechnologiesYaml.title',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'technologies',
        path: `${__dirname}/content/technologies`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              extensions: ['.mdx', '.md'],
              linkImagesToOriginal: false,
              maxWidth: 800,
              quality: 90,
              withWebp: { quality: 95 },
            },
          },
        ],
        // @TODO: Fix workaround to force Gatsby to identify gatsby-remark-* plugins
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'hsl(284, 28%, 21%)',
        theme_color: 'hsl(284, 28%, 21%)',
        display: 'minimal-ui',
        icon: 'src/images/portfolio-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#a78ba9',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: '6GdJD6Feihv0Vyw8xrNpLqYCfZfXC9nV',
        trackPage: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: `${__dirname}/src`,
        content: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://e9d2a8e515e6493e85e9ab24471bf11c@sentry.io/1414969',
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    title: 'Michael Hale',
    siteUrl: 'https://michaelhale.xyz',
  },
};
