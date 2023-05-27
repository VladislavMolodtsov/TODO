import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

// В консоли записываем npm i - у нас загрузятся все зависимости в package.json и установится папка node_modules
// Подключаем готовые стили, готовые иконки с cdn.js сервера bootstrap.min.css, font-awesome/all.min.css
// Cоздаем название папок через "-" и с маленькой буквы
// Имена компонентам задаем с большой буквы, если название состоит из нескольких слов, то используем CamelCase

function App() {
        return (
                <div className='app'>
                        <AppInfo/> {/* Общая информация о нашем приложении */}

                        <div className="search-panel">
                                <SearchPanel/> {/* Строка поиска */}
                                <AppFilter/> {/* Фильтры */}
                        </div>

                        <EmployersList/> {/* Список сотрудников, каждый отдельный сотрудник - это отдельный компонент EmployersListItem */}
                        <EmployersAddForm/> {/* Компонент с добавлением каждого нового сотрудника */}
                </div>
        );
}

export default App;