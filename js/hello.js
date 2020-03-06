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

// Under, with JSX Syntax.
var HelloWorld = React.createClass({
  render:  function(){
    return (<h1>Hello</h1>);
  }
});
React.render(<HelloWorld />, document.getElementById('root'));
