import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Img, Content, H1, Button, User } from "./styles";
import { useHistory } from "react-router-dom";

// IMAGENS
import Faces from "../../assets/faces.svg"
import Arrow from "../../assets/seta.svg"
import Lixo from "../../assets/lixeira.svg"
// END IMAGENS

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()
  }, [])

  const deleteUser = async userId => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBack () {
    history.push("/")
  }

  return (
    <Container>
      <Img alt="Duas pessoas Conversando" src={Faces} />
      <Content>
        <H1>Usuários</H1>

        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age} Anos</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Lixo} alt="lata-de-lixo" />
                </button>
              </User>
            ))
          }
        </ul>

        <Button onClick={goBack}>
          <img alt="arrow" src={Arrow}/> Voltar 
        </Button>

      </Content>
    </Container>
  )
}

export default Users