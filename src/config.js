require('dotenv').config();

export default {
  port: process.env.PORT || 3000,
  verificationToken: process.env.VERIFICATION_TOKEN,
  pageToken: process.env.PAGE_TOKEN,
};
