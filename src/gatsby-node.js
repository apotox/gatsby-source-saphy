const fetch = require("node-fetch");

exports.sourceNodes = async ({ actions,createNodeId,createContentDigest }) => {
 
    const { createNode } = actions
    // Create nodes here, generally by downloading data
    // from a remote API.
    const resp = await fetch(`https://5e676a591937020016fedbeb.mockapi.io/api/products`)
    const data = await resp.json()


    data.forEach(datum => {
        const nodeContent = JSON.stringify(datum);
        const nodeMeta = {
            // the cat fact unique id is in _id
            id: createNodeId(`saphy-${datum.id}`),
            parent: null,
            children: [],
            internal: {
                // this will be important in finding the node
                type: `saphy`,
                content: nodeContent,
                contentDigest: createContentDigest(datum),
            },
        };
        const node = Object.assign({}, datum, nodeMeta);
        // remove this once it works!
        console.log('\\n\\n', datum.name);
        createNode(node);
    });


    // We're done, return.
    return
}