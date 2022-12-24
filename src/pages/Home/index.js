import React, { useState, useRef } from "react";
import axios from "axios";
import { Container, Img, Content, H1, InputLabel, Input, Button } from "./styles";
import { useHistory } from "react-router-dom";

// IMAGENS
import Peoples from "../../assets/peoples.svg"
import Arrow from "../../assets/seta.svg"
// END IMAGENS

const App = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()

  const history = useHistory()

  async function addNewUser() {
    // if (inputName.current.value === "" && inputAge.current.value === "") return
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    setUsers([...users, newUser])

    history.push('/usuarios')
    
  }

  return (
    <Container>
      <Img alt="Duas pessoas Conversando" src={Peoples} />
      <Content>
        <H1>Olá!</H1>
        <form>
          <InputLabel>Name</InputLabel>
          <Input ref={inputName} type="text" placeholder="Name" />

          <InputLabel>Idade</InputLabel>
          <Input ref={inputAge} min={0} max={100} type="number" placeholder="Idade" />

          <Button onClick={addNewUser}>
            Cadastrar <img alt="arrow" src={Arrow} />
          </Button>
        </form>
      </Content>
    </Container>
  )
}

export default App