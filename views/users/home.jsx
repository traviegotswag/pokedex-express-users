var React = require("react");

class Home extends React.Component {
  render() {
    var usersArray = this.props.users;
    let usersElements = usersArray.map(users => {

        let userId = users.id;
        let actionPath = '/users/'+userId;

        return <li key={users.id}>
            <a href={actionPath}>{users.name}</a>
        </li>
    });

    return (

      <html>
        <head/>
        <body>
            <h3>List of Pokemon Masters</h3>
          <ul>
            {usersElements}
          </ul>
        </body>
      </html>

    );
  }
}

module.exports = Home;


