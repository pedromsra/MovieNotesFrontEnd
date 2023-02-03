import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { Container, Profile } from "./styles"

import { Header } from "../../components/Header"
import { NoteHead } from "../../components/NoteHead"
import { NoteTag } from "../../components/NoteTag"

import { FiArrowLeft, FiClock } from "react-icons/fi"


export function MovieNoteDetails(){
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    const [movieNote, setMovieNote] = useState({});

    useEffect(()=>{
        async function fetchNote(){
            const response = await api.get(`/movie_notes/${params.id}`)
            setMovieNote(response.data)
            console.log(movieNote)
        }
        fetchNote()
    },[])

    return(
        <Container>
            <Header />
            <main>
                <div className="back" onClick={()=>{navigate(-1)}}><FiArrowLeft />Voltar</div>
                <NoteHead className="notehead"
                    data={movieNote}
                />
                <Profile className="profile">
                    <img src={avatarUrl} alt="Avatar" />
                    <p>{user.name}</p>
                    <FiClock />
                    <p>{movieNote.created_at}</p>
                </Profile>
                <NoteTag className="notetag"
                    data={movieNote}
                />
                <div className="description">
                    <p>{movieNote.description}</p>
                </div>
            </main>
        </Container>
    )
}