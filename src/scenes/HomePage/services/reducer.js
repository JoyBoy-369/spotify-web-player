export const album = (
  state = { playlist: {}, nowPlaying: { currentId: "", shouldPlay: false } },
  action
) => {
  switch (action.type) {
    case "playlist/current":
      return { playlist: action.playlist, nowPlaying: action.nowPlaying };
    default:
      return state;
  }
};
