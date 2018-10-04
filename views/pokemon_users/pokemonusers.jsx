var React = require("react");

class Pokemonusers extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h3>Users and Pokemon Relationships</h3>
          <ul>
            {this.props.pokemonusers.map(pokemonusers => (
              <li key={pokemonusers.id}>
                {pokemonusers.name}
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Pokemonusers;