var React = require("react");

class Home extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h3>List of Pokemon Masters</h3>
          <ul>
            {this.props.users.map(users => (
              <li key={users.id}>
                {users.name}
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;