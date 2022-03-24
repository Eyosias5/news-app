const axios = require("axios").default;

//Initialize API
export default axios.create({
  baseURL: `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIA_STACK_API_KEY}&languages=en`,
});
