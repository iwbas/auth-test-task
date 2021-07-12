import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import useSortableData from '../hooks/useSortableData';
import API from '../api';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState();

  const { items, requestSort, sortConfig } = useSortableData(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/api/v1/users/');
        setUsers(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }

    if (sortConfig.key === name) return sortConfig.isAsc ? 'asc' : 'desc';

    return undefined;
  };

  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>
          SPA с адаптивной версткой, реализованной авторизацией пользователя с
          валидацией
        </Alert.Heading>
        <p>
          Задание на выбор: 1. Отображение списка пользователей с фильтрацией по
          юзернейму и сортировкой по ID
        </p>
        <p>Для сортировки нажмите на заголовок таблицы "ID"</p>
      </Alert>
      <h1>Filter: {filter}</h1>
      <InputGroup className="mb-3">
        <FormControl
          aria-describedby="basic-addon1"
          placeholder="filter"
          onChange={(e) => setFilter(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th
              onClick={() => {
                requestSort('id');
              }}
              className={getClassNamesFor('id')}
            >
              ID
            </th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Online</th>
            <th>Last seen</th>
            <th>Superuser</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((item) => {
              if (!filter) return true;
              return item.username.includes(filter);
            })
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.is_active ? '+' : '-'}</td>
                <td>{user.last_login ? user.last_login : '-'}</td>
                <td>{user.is_superuser ? '+' : '-'}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersList;
