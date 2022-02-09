const IPFS = require("ipfs");

async function main() {
    const node = await IPFS.create();
    const version = await node.version();

    //console.log("Version:", version.version);

    const fileAdded = await node.add({
      path: "./public/cover.jpg",
      content: "DESCRIPTION",
    });

    console.log("Added file:", fileAdded.path, fileAdded.cid);
    console.log("https://ipfs.io/ipfs/"+fileAdded.cid);

}

main();
