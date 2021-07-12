import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import API from '../api';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Alert variant="success">
        <Alert.Heading>Проверка аутентификации</Alert.Heading>
        <p>
          После успешной аутентификации токен сохраняется в localStorage.
          <br />
          Не использовал sessionStorage из-за невозможности сохранения токена
          между вкладками.
          <br />
          Не использовал cookie, потому что он прописывается сервером.
        </p>
        <p>
          Для дальнейшей авторизации создал axios request interceptor, в котором
          добавляю токен в хедер.
        </p>
        <p>
          Если сервер возвращает ошибку 401, то с помощью response interceptor'а
          удаляю токен из локал стораджа, далее происходит редирект на страницу
          логина.
        </p>
        <p>
          Проверить это можно вручную удалив токен из хранилища и нажав на кнопку "Тест".
          <br/>
          Она отправляет GET запрос на /api/v1/users/ 
        </p>
      </Alert>
      <Button
        onClick={() => {
          API.get('api/v1/users/').then((res) => console.log(res.data));
        }}
      >
        Тест
      </Button>
    </div>
  );
}

export default Home;
