import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        const { onAdd } = this.props;

        onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    onChangeInput = (e) => {
        const inputValue = e.target;
        this.setState({
            [inputValue.name]: inputValue.value
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text" // управляемый элемент input, потому что имеет аттрибут value
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onChangeInput} />

                    <input type="number" // управляемый элемент input, потому что имеет аттрибут value
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onChangeInput} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;