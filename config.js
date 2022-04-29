/*connection string is new way in postgres heroku to 
pass through env vairables 
do not need rest of them */

export const db = {
  connectionString: process.env.URL,
};
