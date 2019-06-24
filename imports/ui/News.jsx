import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Sinanews from '../api/news';

class News extends Component {
  render() {
    const news = this.props.news.map(
      news => this.makeLine(news)
    );

    return (
      <div>
        <h2>today</h2>
        <ul>{ news }</ul>
      </div>
    );
  }

  makeLine(news) {
    return (
      <li key={news._id}>
        <a href={news.href} target="_blank">{news.title}</a>
      </li>
    );
  }
}

export default NewsContainer = withTracker(() => {
  return {
    news: Sinanews.find().fetch(),
  };
})(News);
