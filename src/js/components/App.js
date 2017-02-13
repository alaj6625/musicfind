var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');

function getAppState(){
	return {
      movies: AppStore.getMovieResults()
	}
}
var App = React.createClass({
      getInitialState: function(){
      return getAppState();
    },

    componentDidMount: function(){
      console.log("Component Mount");
      AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
      console.log("Component UnMount");
      AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
      console.log('App -> Movies ' + this.state.movies);
      if (this.state.movies == ''){
        var movieResults = '';
      } else { var movieResults = <MovieResults movies={this.state.movies} />; }
        return (
          <div>
            <SearchForm />
            {movieResults}
          </div>
        )
    },
    _onChange: function(){
		this.setState(getAppState());
	}

});

module.exports = App;
