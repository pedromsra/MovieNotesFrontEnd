import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import {api} from "../../services/api"

import { Container, Head, Notes } from "./styles"

import { Header } from "../../components/Header"
import { NoteHead } from "../../components/NoteHead"
import { NoteTag } from "../../components/NoteTag"

import { FiPlus } from "react-icons/fi";

export function Home(){
    const navigate = useNavigate();

    const [movieNotes, setMovieNotes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/movie_notes?title=${search}`);
            setMovieNotes(response.data);
        }
        fetchNotes();
    },[search])

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    function handleNewNote(){
        navigate("/new");
    }

    return(
        <Container>
            <Header change = {e=>setSearch(e.target.value)} />
            <main>
                <Head >
                    <div><h1>Meus filmes</h1></div>
                    <div onClick={handleNewNote}><button><FiPlus/>Adicionar filme</button></div>
                </Head>
                <Notes >
                    {movieNotes.map(note=>{
                        return (<div key={String(note.id)} onClick={()=>handleDetails(note.id)}><NoteHead 
                        data={note}
                        />
                        <p>{note.description}</p>
                        <NoteTag 
                            data={note}
                        /></div>)
                    })}
                </Notes>
            </main>
        </Container>
    )
}