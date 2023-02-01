const { Client } = require('pg');

const client = new Client({
  connectionString:
    'postgres://ewpevxwn:UopJdb8D7ZoSjDk_9C1GucJeMezv4yoB@kashin.db.elephantsql.com/ewpevxwn',
});

client.connect();

client.query(
  `CREATE TABLE IF NOT EXISTS entries (
    id serial PRIMARY KEY, 
    food_name text NOT NULL,
    protein integer NOT NULL,
    carbs integer NOT NULL,
    fat integer NOT NULL,
    calories integer NOT NULL
 )
 `,
  (err, res) => {
    console.log(err ? 'Error creating table: ' + err : 'Table created');
  }
);

client.query(`SELECT * FROM entries`, (err, res) => {
  if (err) {
    console.log(`Error: Table does not exist`);
  } else {
    console.log(`Table exists and data: `, res.rows);
  }
});

module.exports = client;
