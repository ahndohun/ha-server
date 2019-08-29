# ha-server

## **allUsers**

모든 유저 찾기

- **URL**

  /users/

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[{"id":1,"name":"이정도","username":"jd1386","email":"lee.jungdo@gmail.com","phone":"010-3192-2910","website":"https://leejungdo.com","province":"경기도","city":"성남시","district":"분당구","street":"대왕판교로 160","zipcode":13525,"created_at":"2019-02-24T16:17:47.000Z","updated_at":"2019-02-24T16:17:47.000Z"},{"id":2,"name":"이정도","username":"jd1386","email":"lee.jungdo@gmail.com","phone":"010-3192-2910","website":"https://leejungdo.com","province":"경기도","city":"성남시","district":"분당구","street":"대왕판교로 160","zipcode":13525,"created_at":"2019-02-24T16:17:47.000Z","updated_at":"2019-02-24T16:17:47.000Z"},{"id":3,"name":"이정도","username":"jd1386","email":"lee.jungdo@gmail.com","phone":"010-3192-2910","website":"https://leejungdo.com","province":"경기도","city":"성남시","district":"분당구","street":"대왕판교로 160","zipcode":13525,"created_at":"2019-02-24T16:17:47.000Z","updated_at":"2019-02-24T16:17:47.000Z"}]`

- **Sample Call:**

  ```javascript
  fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
  ```

## **specific User**

특정 id 유저 찾기

- **URL**

  /users/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{"id":1,"name":"이정도","username":"jd1386","email":"lee.jungdo@gmail.com","phone":"010-3192-2910","website":"https://leejungdo.com","province":"경기도","city":"성남시","district":"분당구","street":"대왕판교로 160","zipcode":13525,"created_at":"2019-02-24T16:17:47.000Z","updated_at":"2019-02-24T16:17:47.000Z"}`

- **Sample Call:**

  ```javascript
  fetch("http://localhost:3000/users/1")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
  ```
