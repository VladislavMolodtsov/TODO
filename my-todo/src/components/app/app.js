import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    onUpdateTerm = (term) => {
        this.setState({term})
    }

    searchEmp = (data, term) => {
        if (term) {
            return data.filter(item => item.name.indexOf(term) > -1);
        }
        return data;
    }

    render() {
        const { data, term } = this.state;
        const employers = data.length;
        const increase = data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className='app'>
                <AppInfo employers={employers} increase={increase} />

                <div className="search-panel">
                    <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
                    <AppFilter />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggle={this.onToggleProp} />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;