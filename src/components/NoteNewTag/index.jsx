import { Container } from "./styles"

import { FiPlus, FiX } from "react-icons/fi"

export function NoteNewTag({value, onChange, type, placeholder, onClick, readOnly=false, isNew = "false"}){
    let tagicon
    let newtag
    if(isNew === "true") {
        tagicon = <FiPlus />;
        newtag = true;
    } else {
        tagicon = <FiX />;
        newtag = false;
    }

    return(
        <Container isNew = {isNew} newtag = {newtag}>
            <input onChange={onChange} type={type} placeholder={placeholder} value={value} readOnly={readOnly}
            />

            <button
                onClick = {onClick}
                type = "button"
            >
                {tagicon}
            </button>
        </Container>
    )
}