import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component{

        constructor(props) {
                super(props);
                this.state = {
                        data: [
                                { name: 'John C.', salary: 800, increase: true, id: 1},
                                { name: 'Alex M.', salary: 3000, increase: false, id: 2},
                                { name: 'Carl W.', salary: 5000, increase: false, id: 3},
                        ]
                }
        }

        /* Задача удалить из массива тот id на которую мы нажали в компоненте employers-list-item.js */
        /* Чтобы работать динамически с данными в компоненте, данные должны быть внутри state, поэтому мы
        изменим компонент на классовый */

        deleteItem = (id) => {
                // console.log(id);

                this.setState(({data}) => {

                        /* First method */
                        // const index = data.findIndex(index => index.id === id); // Возвращает индекс элемента, который подходит под условие

                        // const before = data.slice(0, index); // .slice - копирует часть массива и создает новый (от 1-го элемента до index)
                        // const after = data.slice(index + 1);

                        // const newArr = [...before, ...after]; // Создаем новый массив

                        // return {
                        //         data: newArr
                        // }

                        /* Second method */
                        return {
                                data: data.filter(item => item.id !== id)
                                // Останутся только те элементы массива id которых не совпадает с id который пришел через параметр
                        }

                })
        }

        render() {
                return (
                        <div className='app'>
                                <AppInfo />
        
                                <div className="search-panel">
                                        <SearchPanel />
                                        <AppFilter />
                                </div>
        
                                <EmployersList
                                        data={this.state.data}
                                        onDelete={this.deleteItem} />
                                        {/* Произошла передача данных вниз по иерархии */}
                                        {/* На выходе у нас выводится id корзины на которую мы кликнули */}
                                <EmployersAddForm />
                        </div>
                );
        }
}

export default App;