export default {
  widgets: [
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
                  buildHookId: '6106585b5cf4354702e86349',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f273gr3s',
                  apiId: '669eed11-73c5-416b-bafe-00734dc1e81c'
                },
                {
                  buildHookId: '6106585bdcc8a2079e54a76d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-d8g6fsma',
                  apiId: 'fd4a126d-54ae-411b-b26c-6acc699f1797'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hoverbloom/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-d8g6fsma.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
