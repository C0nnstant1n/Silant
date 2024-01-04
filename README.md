# Дипломный проект
## Фуллстек-приложение для компании Силант

### Серверная часть(Python, Django, RestFramework, Swagger, OpenApi Schema):
__Установка:__
- требуется  Python 3.10 и выше
- pip install -r requirements.txt

__Запуск:__ 
- cd backend
- python manage.py runserver
- rest api доступен по адресу <http://127.0.0.1:8000/api/>
- swagger - <http://127.0.0.1:8000/swagger-ui>, отсюда же можно получить OpenApi Schema
- email backend настроен ны вывод письма в консоль, т.к Яндекс блокирует спам))

### Клиентская часть(React, Redux, React Router )
__Установка:__
- cd frontend
- npm i

__Запуск__
- npm run dev
- - <http://127.0.0.1:3000/>
