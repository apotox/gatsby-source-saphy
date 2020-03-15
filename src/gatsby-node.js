const fetch = require("node-fetch");
const { api_url } = require('./saphy-config')

exports.sourceNodes = async ({
  reporter,
  actions,
  createNodeId,
  createContentDigest
}, options) => {

  if (process.env.NODE_ENV == "development") {
    reporter.warn("------ SAPHY_KEY: " + options.SAPHY_KEY);
  }

  if (options.SAPHY_KEY === undefined) {
    reporter.warn("SAPHY_KEY is not set ");
    return null;
  }

  const {
    createNode
  } = actions; // Create nodes here, generally by downloading data
  // from a remote API.

  const uri = `${api_url}/.netlify/functions/listProducts?key=${options.SAPHY_KEY}`

  const resp = await fetch(uri);
  const data = await resp.json();
  data.forEach(datum => {
    const nodeContent = JSON.stringify(datum);
    const nodeMeta = {
      // the prod unique id is in _id
      id: createNodeId(`saphy-${datum._id}`),
      parent: null,
      children: [],
      internal: {
        // this will be important in finding the node
        type: `saphy`,
        content: nodeContent,
        contentDigest: createContentDigest(datum)
      }
    };
    const node = Object.assign({}, datum, nodeMeta); // remove this once it works!

    console.log('\n prod --> ', datum._id);
    createNode(node);
  }); // We're done, return.

  return;
};