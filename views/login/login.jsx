var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form method="POST" action="/login">
            <div>
              Username:<input name="name" type="text" />
            </div>
            <div>
              Password:<input name="password" type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
