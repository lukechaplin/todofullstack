/* Write a script so we can create, 
update etc a table in the database

Make a js file in the script folder so we 
can write the script that creates our table
Import query function from db folder 
and make a sync function for creating table for the todo sql list in
the heroku database we have setup */

/* NB: create table if not exists is a command 
that stops create table running more than once if script 
is accidently run more than once.
Also table written as string so javascript can handle 
it and postgres can take that and turn it into SQL to create a table
Also will be async function for creating table as talking 
to database server and can take a bit of time */

import query from "../index";

const sqlString =
  "CREATE TABLE IF NOT EXISTS todo (id SERIAL PRIMARY KEY, item TEXT)";

async function createToDo() {
  const res = await query(sqlString);
  console.log("created todo table", res);
}

createToDo();
