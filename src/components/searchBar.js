import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    handleFormSubmit = function({query}) {
        console.log('Handle submit for query', query)
        this.props.history.push('/results');
    }

    renderInput(Field) {
        return <input type="text" placeholder="Search DailySmarty" {...Field.input} />
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;