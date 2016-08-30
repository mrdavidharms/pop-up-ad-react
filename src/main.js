import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let divElement = <div>
  <div id="outer-box" className="outerbox">
    <i id="x-close" className = "fa fa-times" aria-hidden="true" onClick={event => window.confirm('are you sure?')}>
    </i>
      <h3 id="pop-up-header" className="header">
        You got a hot ticket coming your way!
      </h3>

        <h4 id= "sub-header" className="header">
          Enter your email for a chance to win!
        </h4>
        <form
          onSubmit={
            event=> {
              event.preventDefault();
              alert('form was submitted')
            }
          }
          >
          <input type="text" id= "input-field" placeholder="email" />
          <input type="submit" id= "input-button" value="add to list" />
          </form>
          <button type="button" onClick={event => alert('Button was clicked')}></button>
  </div>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('app')
);
