import { Container } from "./styles"

import { Tag } from "../Tag"

export function NoteTag({data, ...rest}){
    let countKey = 0
    return(
        <Container {...rest}>
            {
                data.movieNotesTag &&
                <footer>
                    {
                        data.movieNotesTag.map(tag => <Tag key = {tag.id} title = {tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}