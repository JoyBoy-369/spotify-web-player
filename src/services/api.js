import fetch from 'isomorphic-fetch';
import URI from 'urijs';
import camelcaseKeys from 'camelcase-keys';
import btoa from 'btoa';
import path from 'path';

import Helper from "./Helper";

require('dotenv').config()

const SPOTIFY_BASE_URI = 'https://api.spotify.com/v1';
const BASE_64_ENCODED_CLIENT_CREDENTIALS = btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`);

class Service{

    constructor(){
        this.token="";
    }

    _get(url) {
        if (this.token) {
          return this._getWithToken(url, this.token)
        } else {
          return this._getApiToken().then((token) => (
            this._getWithToken(url, token)
          ));
        }
      },

      _getWithToken(url, token) {
        return fetch(url, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }).then(Helper.checkStatus)
          .then(Helper.parseJson)
          .then((data) => camelcaseKeys(data, { deep: true }));
      },
    
      _getApiToken() {
        return fetch('https://accounts.spotify.com/api/token', {
          method: 'post',
          body: 'grant_type=client_credentials',
          headers: {
            Authorization: `Basic ${BASE_64_ENCODED_CLIENT_CREDENTIALS}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then(Helper.checkStatus)
          .then(Helper.parseJson)
          .then((json) => json.access_token)
          .then((token) => this.token = token)
      },

      spotifySearch(searchKey){
          const url=URI(SPOTIFY_BASE_URI + '/search/')
          .query({ 
              q:searchKey,
              type:'artist,album,track'
         });

          return this._get(url)
          .then((data) => Helper.parseData(data))
      }

      getFeaturedPlaylists(){
          const url=URI(SPOTIFY_BASE_URI+'/browse/featuredp-playlists');

          return this._get(url)
          .then((data)=>Helper.parseData(data))
      }

        getAlbums(albumIds) {
    return this._get(
      SPOTIFY_BASE_URI + '/albums?ids=' + albumIds.join(',')
    ).then((data) => (
      data.albums.map((a) => Helper.parseData(data)
    ));
  },

}

export default const service=new Service();

