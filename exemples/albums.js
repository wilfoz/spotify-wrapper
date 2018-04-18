global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const album = searchAlbums('U2');

album.then(data => data.albums.itens.map(item => console.log(item.name)));
