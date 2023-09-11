import { useQuery } from "react-query"
import { CardSection, CardWrapper, CardTop, CardCenter, CardH4, Card_P, CardContent, CardImg, CardContainer } from "./style"

export const twoCard = () => {
    const { isLoading, data } = useQuery('two-Card', () => {
        return fetch('https://64fedbfff8b9eeca9e29301c.mockapi.io/apple')
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }
}

function TwoCard() {

    return (
        <CardSection>
            <CardContainer>
                <CardWrapper>

                    {
                        data?.data.map(item => {
                            return (
                                <CardContent>
                                <CardTop>
                                    <CardImg src={item?.img} width={400} height={300} />
                                </CardTop>

                                <CardCenter>
                                    <CardH4>{item?.name}</CardH4>
                                    <Card_P>{item?.title}</Card_P>
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

export default TwoCard