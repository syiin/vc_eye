export const loginPath = "http://localhost:8888/login";
export const signUpPath = "http://localhost:8888/registeruser";
export const addStartupPath = "http://localhost:8888/createStartup";
export const getStartupString = userid => {
  return `http://localhost:8888/${userid}/mystartups`;
};
