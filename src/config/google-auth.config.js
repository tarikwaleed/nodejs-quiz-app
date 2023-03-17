
const path=process.env.GOOGLE_APPLICATION_CREDENTIALS
const credentials = require(path);
const {google} = require('googleapis');

const authClient = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);


module.exports=authClient