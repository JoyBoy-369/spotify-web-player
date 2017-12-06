
class Helper{

    parseJson(response) {
        return response.json();
      },

    getFirstImageUrl(images){
        images && images[0] && images[0].url
    },

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(`HTTP Error ${response.statusText}`);
          error.status = response.statusText;
          error.response = response;
          console.log('Error communicating with Spotify:');
          console.log(error);
          throw error;
        }
      }

    parseData(data){
        let parseType=_checkData(data);
        return parseType(data);
       },
      
    checkData(data){
        if(this.hasProp(data,'artists'))
        return this.parseArtists; 
        else if(this.hasProp(data,'albums'))
        return this.parseAlbums; 
        else if(this.hasProp(data,'tracks'))
        return this.parseTracks; 
        
       },

    hasProp (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      },

    parseAlbums(albums){
        return albums.map(this.parseAlbum);
      },
      
    parseAlbum(album) {
        return {
          id: album.id,
          tracks: album.tracks && album.tracks.items.map((i) => this.parseTrack(i)),
          artist: this.parseArtist(album.artists[0]),
          year: album.releaseDate && album.releaseDate.slice(0, 4),
          imageUrl: this.getFirstImageUrl(album.images),
          name: album.name.replace(/\s\(.+\)$/, ''),
        };
      },
    parseArtist(artist) {
        return {
          imageUrl: this.getFirstImageUrl(artist.images),
          name: artist.name,
          id: artist.id,
        };
      }
      
    parseTrack(track) {
        return {
          albumImage: track.album && this.getFirstImageUrl(track.album.images),
          name: track.name,
          durationMs: track.durationMs,
          id: track.id,
          trackNumber: track.trackNumber,
          previewUrl: track.previewUrl,
        };
      },

}

export default const helper=new Helper()