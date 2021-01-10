import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {
    renderInput(Field) {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <form>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

searchBar = reduxForm({
    form: 'SearchBar'
})(SearchBar);

export default SearchBar;