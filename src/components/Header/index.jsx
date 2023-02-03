import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../../hooks/auth"
import {api} from "../../services/api";
import { Container, Profile } from "./styles"

import { Input } from "../../components/Input"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"


export function Header({change}){
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    function handleSignOut(){
        signOut();
        navigate("/")
    }

    return(
        <Container>
            <Link to="/">RocketMovies</Link>
            <Input type="text" placeholder = "Pesquisar pelo título" onChange={change} />
            <Profile>
                <div>
                    <Link to="/profile">{user.name}</Link>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Link to="/profile"><img src={avatarUrl} alt="Avatar" /></Link>
            </Profile>
        </Container>
    )
}