// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "8765545b25344f0095aa282cbadd8093";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-playing",
  "user-read-playback-playing",
  "user-top-read",
  "user-modify-playback-state",
];
