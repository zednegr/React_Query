import { useState, useEffect } from "react"
import { CardSection, CardWrapper, CardTop, CardCenter, CardH4, Card_P, CardContent, CardImg, CardContainer } from "./style"

function Cards() {

    const [getData, setGetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://64fedbfff8b9eeca9e29301c.mockapi.io/apple')
            .then((res) => (res.json()))
            .then((data) => setGetData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
            <CardSection>
                <CardContainer>
                    <CardWrapper>

                        {
                            getData?.map(item => {

                                return (
                                    <CardContent>
                                        <CardTop>
                                            <CardImg src={item.img} width={400} height={300} />
                                        </CardTop>

                                        <CardCenter>
                                            <CardH4>{item?.name}</CardH4>
                                            <Card_P>{item.title}</Card_P>

                                        </CardCenter>
                                    </CardContent>
                                )
                            })
                        }

                    </CardWrapper>
                </CardContainer>
            </CardSection>
    )
}

export default Cards