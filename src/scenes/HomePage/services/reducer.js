export const album = (state = { playlist: {}, shouldPlay: false }, action) => {
  switch (action.type) {
    case "playlist/current":
      return { playlist: action.playlist, shouldPlay: action.play };
    default:
      return state;
  }
};
