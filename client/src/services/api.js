import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        console.log(err);
        return reject(err.response.data.error);
      });
  });
}

export function authenticateUser(username, token, userid) {
  localStorage.setItem("username", username);
  localStorage.setItem("jwtToken", token);
  localStorage.setItem("userid", userid);
}

export function isUserAuthenticated() {
  return localStorage.getItem("jwtToken") !== null;
}

function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function getToken() {
  return localStorage.getItem("jwtToken");
}

export function forwardToken() {
  setTokenHeader(getToken());
}

export function logOut() {
  localStorage.clear();
}
