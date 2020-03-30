export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e82156eb2a005d5eb3ed2b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h46zsiy3',
                  apiId: '5848078f-0e01-47a9-b705-147292235269'
                },
                {
                  buildHookId: '5e82156f841733c34a7bf60b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-271cq373',
                  apiId: '84314ee0-aa27-47dd-b219-470eb0a286af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mansoor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-271cq373.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
