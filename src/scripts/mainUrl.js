const MAIN_URL =
  process.env.REACT_APP_BACKEND_URL === "prod"
    ? "https://api.tucanderatours.com/"
    : "http://localhost/projects/tucandera/tucandera_remake/";
const THIS_URL = "https://tucanderatours.com/";

const SITE_LIST_URL = MAIN_URL + "api/sites/";
const BUSINESS_LIST_URL = MAIN_URL + "api/business/";
const SITES_IMG_URL = MAIN_URL + "api/sites/image/";
const BUSINESS_IMG_URL = MAIN_URL + "api/business/image/";

export {
  THIS_URL,
  SITE_LIST_URL,
  BUSINESS_LIST_URL,
  BUSINESS_IMG_URL,
  SITES_IMG_URL,
};
export default MAIN_URL;
