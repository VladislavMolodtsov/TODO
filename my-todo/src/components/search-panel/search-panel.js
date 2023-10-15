import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onUpdateTerm = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateTerm(term)
    }

    render() {
        const {term} = this.state;

        return (
            <>
                <input
                    type = "text"
                    className = 'form-control search-input'
                    placeholder = 'Найти сотрудника' 
                    value={term}
                    onChange={this.onUpdateTerm} />
            </>
        )
    }
}

export default SearchPanel;