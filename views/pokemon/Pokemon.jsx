var React = require("react");

class Pokemon extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div>
            <form method="POST" action="/pokemon/capture">
                <ul className="pokemon-list">
                  <li className="pokemon-attribute">
                    id: {this.props.pokemon.id}
                  </li>
                  <li className="pokemon-attribute">
                    name: {this.props.pokemon.name}
                  </li>
                  <li className="pokemon-attribute">
                    img: {this.props.pokemon.img}
                  </li>
                  <li className="pokemon-attribute">
                    height: {this.props.pokemon.height}
                  </li>
                  <li className="pokemon-attribute">
                    weight: {this.props.pokemon.weight}
                  </li>
                </ul>
                <input type="submit" value="Capture Pokemon!" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Pokemon;


