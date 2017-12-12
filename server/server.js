const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const SpotifyClient = require("./SpotifyClient");

const app = express();
app.use(cors());

app.set("port", process.env.API_PORT || 3001);

if (process.env.NODE_ENV !== "TEST") {
  app.use(morgan("combined"));
}

app.get("/api/albums", (req, res) => {
  const albumIds = req.query.ids.split(",");

  SpotifyClient.getAlbums(albumIds)
    .then(albums => res.json(albums))
    .catch(error =>
      res.status(500).json({
        success: false,
        message: "There was an error when interfacing with Spotify",
        error: error
      })
    );
});

app.get("/api/featured/playlists", (req, res) => {
  SpotifyClient.getFeaturedPlaylists()
    .then(playlists => res.json(playlists))
    .catch(error =>
      res.status(500).json({
        success: false,
        message: "There was an error when interfacing with Spotify",
        error: error
      })
    );
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
