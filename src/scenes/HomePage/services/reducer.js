export const album = (state = { playlist: {}, shouldUpdate: true }, action) => {
  switch (action.type) {
    case "playlist/current":
      return { playlist: action.playlist, shouldUpdate: false };
    default:
      return state;
  }
};
