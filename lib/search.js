'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, _config.HEADERS).then(_utils.toJSON);
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  search(query, 'album');
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
  search(query, 'artist');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  search(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  search(query, 'playlist');
};