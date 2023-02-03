import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

import {api} from "../../services/api"

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiLock, FiMail, FiArrowLeft} from "react-icons/fi";

export function SignUp(){
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSingUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos.")
        }

        api.post("/users", {name, email, password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        }).catch(error=>{
            if(error.message){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input type = "text" placeholder = "Nome" icon = {FiUser} onChange={e=>setName(e.target.value)} />
                <Input type = "text" placeholder = "E-mail" icon = {FiMail} onChange={e=>setEmail(e.target.value)} />
                <Input type = "password" placeholder = "Senha" icon = {FiLock} onChange={e=>setPassword(e.target.value)} />
                <Button title = "Cadastrar" onClick={handleSingUp} />
                <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
            </Form>
            <Background />
        </Container>
    )
}