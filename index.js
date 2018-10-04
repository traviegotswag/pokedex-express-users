/**
 * 2. New routes for user-creation
 * 3. Change the pokemon form to add an input for user id such that the pokemon belongs to the user with that id
 * 4. (FURTHER) Add a drop-down menu of all users on the pokemon form
 * 5. (FURTHER) Add a types table and a pokemon-types table in your database, and create a seed.sql file inserting relevant data for these 2 tables. Note that a pokemon can have many types, and a type can have many pokemons.
 */

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'admin',
  host: '127.0.0.1',
  database: 'pokemons',
  port: 5432,
};

if (config.user === 'ck') {
	throw new Error("====== UPDATE YOUR DATABASE CONFIGURATION =======");
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('Idle client error', err.message, err.stack);
});


//Configurations and set up------------------------------------------------------------------------------------------------

// Init express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

 const getRoot = (request, response) => {
  // respond with HTML page displaying all pokemon
  const queryString = 'SELECT * from pokemon;';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'pokemon/home', {pokemon: result.rows} );
    }
  });
}

app.get('/', getRoot);

//-----------------------------------------------------------------------

const editPokemonForm = (request, response) => {
  let id = request.params['id'];
  const queryString = 'SELECT * FROM pokemon WHERE id = ' + id + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'pokemon/edit', {pokemon: result.rows[0]} );
    }
  });
}

app.get('/pokemon/:id/edit', editPokemonForm);

//-----------------------------------------------------------------------

const getNew = (request, response) => {
  response.render('pokemon/new');
}

app.get('/pokemon/new', getNew);

//-----------------------------------------------------------------------

const getPokemon = (request, response) => {
  let id = request.params['id'];
  const queryString = 'SELECT * FROM pokemon WHERE id = ' + id + ';';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.render( 'pokemon/pokemon', {pokemon: result.rows[0]} );
    }
  });
}

app.get('/pokemon/:id', getPokemon);

//-----------------------------------------------------------------------

const deletePokemonForm = (request, response) => {
  response.send("COMPLETE ME");
}

app.get('/pokemon/:id/delete', deletePokemonForm);

//-----------------------------------------------------------------------

const postPokemon = (request, response) => {
  let params = request.body;

  const queryString = 'INSERT INTO pokemon(name, img, weight, height) VALUES($1, $2);';
  const values = [params.name, params.height];

  pool.query(queryString, values, (err, result) => {
    if (err) {
      console.log('query error:', err.stack);
    } else {
      console.log('query result:', result);

      // redirect to home page
      response.redirect('/');
    }
  });
};

app.post('/pokemon', postPokemon);

const updatePokemon = (request, response) => {
  let id = request.params['id'];
  let pokemon = request.body;
  const queryString = 'UPDATE "pokemon" SET "num"=($1), "name"=($2), "img"=($3), "height"=($4), "weight"=($5) WHERE "id"=($6)';
  const values = [pokemon.num, pokemon.name, pokemon.img, pokemon.height, pokemon.weight, id];
  console.log(queryString);
  pool.query(queryString, values, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
    } else {
      console.log('Query result:', result);

      // redirect to home page
      response.redirect('/');
    }
  });
}

app.put('/pokemon/:id', updatePokemon);

//-----------------------------------------------------------------------

const deletePokemon = (request, response) => {
  response.send("COMPLETE ME");
}

app.delete('/pokemon/:id', deletePokemon);

//-----------------------------------------------------------------------

// CREATE USER FORM
const userNew = (request, response) => {
  response.render('users/new');
}

app.get('/users/new', userNew);


//-----------------------------------------------------------------------

// POST INFO FROM FORM AND INSERT INTO DATABASE
app.post('/users/', (request, response) => {

  const queryString = 'INSERT INTO users (name) VALUES ($1)';
  const values = [request.body.name];
  // console.log(values);

  pool.query(queryString, values, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
      response.send('Error!');
    } else {
      console.log('Query result:', result);
      // redirect to home page
      response.redirect('/users')
    }
  });
});

//-----------------------------------------------------------------------

app.get('/users', (request, response) => {

  const queryString = 'SELECT * FROM users';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
      response.send('Error!');
    } else {
      // console.log('Query result:', result);
      // redirect to home page
      response.render('users/home', {users: result.rows});
    }
  });
});

//-----------------------------------------------------------------------

// POST INFO FROM FORM AND INSERT INTO DATABASE
app.get('/pokemonusers', (request, response) => {

  const queryString = 'SELECT * FROM pokemon_users';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('Query error:', err.stack);
      response.send('Error!');
    } else {
      // console.log('Query result:', result);
      // redirect to home page
      response.render('pokemon_users/pokemonusers', {pokemonusers: result.rows});
    }
  });
});

//     ----------         ----------         ----------         ----------

//within the users page,
    //a. allow for hyperlink to go to another page that displays the pokemon that each user has
    //b. have an input field for users to type pokemon id to create the link


//create another page for relationship

//




/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));


// // Handles CTRL-C shutdown
// function shutDown() {
//   console.log('Recalling all ships to harbour...');
//   server.close(() => {
//     console.log('... all ships returned...');
//     pool.end(() => {
//       console.log('... all loot turned in!');
//       process.exit(0);
//     });
//   });
// };

// process.on('SIGTERM', shutDown);
// process.on('SIGINT', shutDown);


