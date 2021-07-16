export const setUser = (user) => {
  window.localStorage.setItem("User", JSON.stringify(user));
};

export const getUser = () =>
  window.localStorage.getItem("User")
    ? JSON.parse(window.localStorage.getItem("User"))
    : {};


export const isLoggedIn = () => {
    const user = getUser()
    return !!user.jwt
}