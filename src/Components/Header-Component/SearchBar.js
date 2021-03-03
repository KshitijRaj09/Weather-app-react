import React from 'react';

class SearchBar extends React.Component{

    state={
        searchInput: '',
    }
    constructor(){
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInput);
    }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <input type='search' value={this.state.searchInput} onChange={e=>this.setState({searchInput: e.target.value})} placeholder='Input Location'/>
            </form>
        </div>
        )
    }

}

export default SearchBar;

