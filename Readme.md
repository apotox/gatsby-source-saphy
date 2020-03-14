## gatsby-source-saphy

use saphy strore as a source to your gatsbyjs ecommerce website


<p align="center"> 
    <img src="https://travis-ci.org/apotox/gatsby-source-saphy.svg?branch=master">
</p>

### Installation
```shell
    #NPM
    npm i --save gatsby-source-saphy
    #YARN
    yarn add gatsby-source-saphy

```

### add the envirenment variable **SAPHY_KEY=...**

### use in  gatsby-config.js

```javascript
    plugins: [
        //...
        'gatsby-source-saphy',
    ]
    
```

### query all product from your store using GraphQL
```javascript

   exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;
    const postTempalte = path.resolve("./src/templates/post.js");

    return graphql(`
    query {
        allSaphy {
            edges {
              node {
                avatar
                name
                id
              }
            }
        }
    }
  `).then(result => {

        let alledges = result.data.allSaphy.edges
        alledges.forEach(({ node }) => {
            createPage({
                path: _.kebabCase(node.name),
                id: node.id,
                component: postTempalte,
                context: {
                    id: node.id
                }
            })
        })
    })

}

```
