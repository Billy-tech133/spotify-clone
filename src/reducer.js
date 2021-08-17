export const initialState = {
  token:
    "BQA0MyCtjnIzQwdE2so6m4ksBiCYXsvScp1zTeUOxhCBjWfEh_rDqzM3Dz8t4O_LWLwV5T7UOb9pR1T4fv8JzZe_W3MDuNUbEwZNnfLYo-o1VxlagfVmqR9KBMSE6qjI7zTro-MyrkNn08RRn47Gt7fXD5r746blF7te1Slz7K3Pfh1p",
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
