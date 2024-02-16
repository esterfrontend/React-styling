import Title from "../Title/Title"
import MainContent from "../MainContent/MainContent"
import Card from "../CardHome1/Card"

const Home1 = () => {
    return (
        <>
            <Title></Title>

            <MainContent>
                <Card 
                imageLeft 
                title="Título del ejercicio 1" 
                paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                />
                <Card 
                imageLeft='false' 
                title="Título del ejercicio 2"  
                paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                />
                <Card 
                imageLeft 
                title="Título del ejercicio 3" 
                paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                />
            </MainContent>
        </>
    )
}

export default Home1

