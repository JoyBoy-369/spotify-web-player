import fetch from "isomorphic-fetch";

class Service {
  constructor() {
    this.token = "";
  }

  getAlbums(albumIds) {
    // See note about tokens above
    const url = "http://localhost:3001/api/albums?ids=" + albumIds.join(",");
    return fetch(url, {
      method: "get",
      headers: {
        accept: "application/json"
      }
    })
      .then(this.parseJson)
      .catch(err => console.log(err));
  }

  getPlaylists(category) {
    switch (category) {
      case "featured":
        return this.getFeaturedPlaylists();
      case "genres":
        break;
      case "newreleases":
        break;
      case "discover":
        break;
      default:
        return null;
    }
  }

  getFeaturedPlaylists() {
    // See note about tokens above
    const url = "http://localhost:3001/api/featured/playlists";
    return fetch(url, {
      method: "get",
      headers: {
        accept: "application/json"
      }
    })
      .then(this.parseJson)
      .catch(err => console.log(err));
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJson(response) {
    return response.json();
  }
}

export const service = new Service();
