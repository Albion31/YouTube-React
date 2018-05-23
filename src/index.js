import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'penguins'}, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));