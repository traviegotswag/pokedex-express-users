var React = require("react");

class Pokemonusers extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form className="pokemonusers" method="POST" action="/pokemonusers">
            <div>
              Pokemon ID: <input name="pokemonid" type="text" />
            </div>
            <div>
              User ID: <input name="userid" type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Pokemonusers;