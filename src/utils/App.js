//is Logged in
export const isLoggedIn = () => {
    let data = sessionStorage.getItem("data");
    if (data == null) {
    return false;
    } else {
    return true;
    }
    };
    // doLogin data=> set to locastorage
    export const doLogin = (data, next) => {
    sessionStorage.setItem("data", JSON.stringify(data));
    next();
    };
    //doLogout=> remove from localStorage
    export const doLogout = (next) => {
    sessionStorage.removeItem("data");
    next();
    
    };
    //function used to get token of logged user
    export const getCurrentUserToken = () => {
    if (isLoggedIn) {
    let data = JSON.parse(sessionStorage.getItem("data"));
    console.log("token",data.token)
    let token = data.token;
    return token;
    } else {
    return console.log("user is logged out");
    }
    };
    //function used to get current logged in userid
    export const getCurrentUsername = () => {
    if (isLoggedIn) {
    let data = JSON.parse(sessionStorage.getItem("data"));
    //console.log("username", data.user);
    let userId = data.user.userId;
    // console.log("user", userId);
    return userId;
    } else return console.log("something went wrong plz try again");
    };