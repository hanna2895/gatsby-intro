const ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/hanna2895/gatsby-portfolio.git',
    },
    () => {
        console.log("Deploy Complete!")
    }
)