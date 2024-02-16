import Title from "../../components/Title/Title"
import MainContent from "../../components/MainContent/MainContent"
import Card from "../../components/CardHome2/CardHome2"
import Filter from "../../components/Filter/Filter"

import nonImage from "../../resources/img/non-image.png"
import Image4 from "../../resources/img/image4.jpg"


const Home1 = () => {
    return (
        <>
            <Title></Title>

            <MainContent>
                <Filter />
                <Card 
                    imageLeft 
                    imageSrc={nonImage}
                    title="Título del ejercicio 1" 
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    buttonText="Ver proyecto"
                />
                <Card 
                    imageLeft 
                    imageSrc={nonImage}
                    title="Título del ejercicio 2" 
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    buttonText="Ver proyecto"
                />
                <Card 
                    imageLeft 
                    imageSrc={Image4}
                    title="Título del ejercicio 3" 
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    buttonText="Ver proyecto"
                />
            </MainContent>
        </>
    )
}

export default Home1

