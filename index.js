const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./tracker');
const download = require('./src/download');
const torrentParser = require('./src/torrent-parser');

const torrent = torrentParser.open(process.argv[2]);

download(torrent, torrent.info.name);

tracker.getPeers(torrent, peers => {
  console.log('list of peers: ', peers);
});