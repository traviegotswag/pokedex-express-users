var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form method="POST" action="/logout">
          <h3>Welcome to your account!</h3>
            <div>
            Feel free to browse the site to look for Pokemons!
            </div>
            <br></br>
            <input type="submit" value="Logout" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
