import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };

    this.updateFilter = this.updateFilter.bind(this);
    this.filterPost = this.filterPost.bind(this);
  }

  updateFilter(event) {
    this.setState({
      text: event.target.value
    });
  }

  filterPost() {
    const { filterPostFn } = this.props;
    const { text } = this.state;
    filterPostFn(text);
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.updateFilter} />

          <SearchIcon id="Search__icon" onClick={this.filterPost} />
        </div>
      </section>
    );
  }
}
