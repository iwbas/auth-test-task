export default function getToken() {
  const tokenString = localStorage.getItem('token');

  try {
    const userToken = JSON.parse(tokenString);
    return userToken;
  } catch (err) {
    localStorage.removeItem('token');
  }
}
