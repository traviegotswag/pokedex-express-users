var React = require("react");

class Userpage extends React.Component {
  render() {
    let array = this.props.userspokemon;
    let trainer = this.props.userspokemon[0].trainer;
    return (
      <html>
        <head />
        <body>
          <h3>List of Pokemon that {trainer} have</h3>
              <ul>
                {array.map(userspokemon => (
                  <li>{userspokemon.pokemon}
                  </li>
                ))}
              </ul>
        </body>
      </html>
    );
  }
}

module.exports = Userpage;


          // console.log(this.props.userspokemon);