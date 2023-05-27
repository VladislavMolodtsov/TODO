import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

// 8:45 Взять массив data перебрать каждый элемент массива и из него сформировать каждый новый компонент EmployersListItem
// метод map пройдет по массиву, сделает что-то и вернет нам новый массив. Данный превратяться в элементы

const EmployersList = ({data}) => {

        const elements = data.map(item => {
                return (
                        // <EmployersListItem name={name} salary={salary}/>
                        <EmployersListItem {...item}/> // используем object spread operator
                )
        });

        return (
                <ul className="app-list list-group">
                        {elements}
                </ul>
        )
}

export default EmployersList;