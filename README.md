# **_`Тестовое задание ReactJS.`_**

Тестовое приложение на React + Typescript + Antd + Redux

Созданы два основных компонента:

    1) Авторизация - форма из двух полей
        - username
        - password
        
        При заполнении формы происходит проверка введенных данных на клиенте.
        После при отправки данных в формате JSON, после удачной логинизации с сервера будет токен 
        по которому будут совершаться все остальные запросы. `Authorization: Bearer <token>.`
            {
              "username": "string",
              "password": "string"
            }
           
    2) Список домов - компонента отрисовывает селект в котором с сервера подгружается список компаний.
       После выбора компании подгружается таблица с домами. Таблица реализована с пагинацией. 

*p.S: Email и пароль для проверки:*

**Email**: xxx@xxxx.ru

**Пароль**: xxxxx