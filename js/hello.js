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
var Clock = React.createClass({
  render: ()=>{
    var time = new Date();
    // Needs to update when time changes, next fix.
    return <span>{time.toLocaleTimeString()}</span>;
  }
});
var Author = React.createClass({
  render: function(){
    return <span>Petter Lopez</span>;
  }
});
 var HelloWorld = React.createClass({
  render: function(){
    return (
      <div id="content">
        <div><Clock/></div>
        <h1>React: <span id="ver">0.12.2</span> - By <Author/></h1>
        <hr/>
      </div>
    );
  }
});
React.render(<HelloWorld />, document.getElementById('root'));
