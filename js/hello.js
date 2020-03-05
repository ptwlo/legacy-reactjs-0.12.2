var HelloWorld = React.createClass({
  render:  function(){
    return React.createElement('h1', null,"Hello Petter from React 0.12.2");
  }
});
React.render(
  React.createElement(HelloWorld, null),
  document.getElementById('root')
);
