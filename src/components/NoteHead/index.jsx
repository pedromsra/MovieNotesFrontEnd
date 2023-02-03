import { Container } from "./styles"

import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export function NoteHead({data, ...rest}){
    let countRate = -1
    let countKey = 0
    const rating = Array.from({length: 5})
    const starRate = rating.map(rate => {
        countRate++
        if (countRate < data.rating) {
            return true
        } else {
            return false
        }
    })

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            {
                data.rating && 
                <div>
                    {starRate.map(rate => {
                        countKey++
                        if(rate){
                            return <AiFillStar key={countKey} />
                        } else {
                            return <AiOutlineStar key={countKey} />
                        }
                    })}
                </div>
            }
        </Container>
    )
}