import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {api} from "../../services/api";

import {useAuth} from "../../hooks/auth"

import { Container, Header, UserImage, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { FiUser, FiCamera, FiMail, FiLock, FiUnlock, FiArrowLeft } from "react-icons/fi"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

export function Profile(){
    const navigate = useNavigate();

    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    const [avatarLink, setAvatarLink] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile(){
        const updated = {
            name,
            email,
            password: passwordNew,
            oldPassword: passwordOld
        }
        const userUpdated = Object.assign(user, updated)
        await updateProfile(userUpdated, avatarFile)

        navigate("/")
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];

        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatarLink(imagePreview);
    }

    return(
        <Container>
            <Header>
                <div onClick={()=>navigate(-1)}><FiArrowLeft />Voltar</div>
            </Header>
            <Form>
                    <UserImage>
                        <img src={avatarLink} alt="User image" />
                        <label>
                            <FiCamera />
                            <input id="avatar" type="file" onChange={handleChangeAvatar} />
                        </label>
                    </UserImage>
                    <Input type = "text" icon={FiUser} placeholder="Seu Nome" value={name} onChange={e=>setName(e.target.value)} />
                    <Input type = "text" icon={FiMail} placeholder="seu.nome@mail.com" value={email} onChange={e=>setEmail(e.target.value)} />
                    <Input type = "password" icon={FiLock} placeholder="Senha Atual" onChange={e=>setPasswordOld(e.target.value)} />
                    <Input type = "password" icon={FiUnlock} placeholder="Nova Senha" onChange={e=>setPasswordNew(e.target.value)} />
                    <Button title="Salvar" onClick={handleUpdateProfile} />
            </Form>
        </Container>
    )
}