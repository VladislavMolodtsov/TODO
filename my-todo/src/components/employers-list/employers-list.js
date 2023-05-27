import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

// 8:45 Взять массив data перебрать каждый элемент массива и из него сформировать каждый новый компонент EmployersListItem
// метод map пройдет по массиву, сделает что-то и вернет нам новый массив. Данный превратяться в элементы

const EmployersList = ({data}) => {

        const elements = data.map(item => {

                const {id, ...itemProps} = item; // Деструктуризация по остаточному принципу
                
                return (
                        <EmployersListItem key={id} {...itemProps}/>
                )
        });

        return (
                <ul className="app-list list-group">
                        {elements}
                </ul>
        )

}

export default EmployersList;