import axios from "axios";


export const uploadImage = (imageLink, history) => dispatch => {
  axios
    .post("/api/profile/uploadfiles", imageLink)
    .then(res => history.push("/dashboard"))
    .catch(err => console.log("unsuccessful"));
};
