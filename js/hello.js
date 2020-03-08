/* *************************** Without JSX Syntax ***************
var HelloWorld = React.createClass({
  render:  function(){
    return React.createElement('h1', null,"Hello Petter Wilson from React 0.12.2");
  }
});
React.render(
  React.createElement(HelloWorld, null),
  document.getElementById('root')
);
*/

// Below, with JSX Syntax.
var Clock = React.createClass({
  render: ()=>{
    var time = new Date();
    // Needs to update when time changes, next fix.
    return <span>{time.toLocaleTimeString()}</span>;
  }
});
var Author = React.createClass({
  render: function(){
    return <span>{this.props.author}</span>;
  }
});
var Login = React.createClass({ // form component in progress, not done.
  render: ()=>{
    function enter(){
      var tname = document.getElementById('username').value;
      var pass = document.getElementById('password').value;
      console.log(tname);
    }
    return (
      <div id="login"> // wont be using a form element till I connect it to a DataBase.
          <label for="username">User: </label>
          <input id="username" type="text" placeholder=" username"/>
          <br/>
          <label for="password">Password: </label>
          <input id="password" type="password"/>
          <br/>
          <button onClick={enter}>Submit</button>
      </div>
    )
  }
});

// *===== Main Component =====*
 var HelloWorld = React.createClass({
  render: function(){
    return (
      <div id="content">
        <div><Clock /></div>
        <h1>React: <span id="ver">0.12.2</span> - By <Author author="Petter Lopez"/></h1>
        <hr/>
        <Login />
      </div>
    );
  }
});
React.render(<HelloWorld />, document.getElementById('root'));
