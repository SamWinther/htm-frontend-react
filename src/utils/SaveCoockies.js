import Cookies from "js-cookie"

// Function to set cookie after successful login
const SaveCoockies = (token) => {
  Cookies.set('authToken', token, { expires: 7 }); // Expires in 7 days
};

export default SaveCoockies;