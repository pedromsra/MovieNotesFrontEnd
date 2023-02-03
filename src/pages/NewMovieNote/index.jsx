import {useNavigate} from "react-router-dom"
import {useState} from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { Container, Head, Form, Footer, RouteButtons } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteNewTag } from "../../components/NoteNewTag"
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi"

export function NewMovieNote(){
    const navigate = useNavigate();
    const {user} = useAuth();

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("")

    async function handleSave(){
        const note = {
            title,
            rating,
            description,
            tags,
            user_id: user.id
        }

        try {
            const response = await api.post("/movie_notes", note)
            alert("Nova nota criada com sucesso")
            navigate("/")
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível criara a nota")
            }
        }
    }

    function handleExcludeNote(){
        navigate(-1);
    }

    function handleNewTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }
    return(
        <Container>
            <Header />
            <main>
                <Head>
                    <div className = "back" onClick={()=>{navigate(-1)}}><FiArrowLeft />Voltar</div>
                    <h1>Novo Filme</h1>
                </Head>
                <Form>
                    <div>
                        <Input type="text" placeholder="Título" onChange={e=>setTitle(e.target.value)} />
                        <Input type="text" placeholder="Sua nota (de 0 a 5)" onChange={e=>setRating(e.target.value)} />
                    </div>
                    <TextArea placeholder="Observações" onChange={e=>setDescription(e.target.value)} />
                </Form>
                <p>Marcadores</p>
                <Footer>
                    {tags.map(tag=><NoteNewTag isNew = "false" value={tag} type = "text" readOnly="true" onClick={()=>handleRemoveTag(tag)} />)}
                    <NoteNewTag isNew = "true" type = "text" value={newTag} placeholder="Novo Marcador" onClick={handleNewTag} onChange={e=>setNewTag(e.target.value)} />
                </Footer>
                <RouteButtons>
                    <Button title="Excluir Filme" onClick={handleExcludeNote}/>
                    <Button title="Salvar alterações" onClick={handleSave}/>
                </RouteButtons>
            </main>
        </Container>
    )
}