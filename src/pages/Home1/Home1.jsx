import Title from "../../components/Title/Title"
import MainContent from "../../components/MainContent/MainContent"
import Card from "../../components/CardHome1/CardHome1"

import image1 from "../../resources/img/image1.jpg"
import image2 from "../../resources/img/image2.jpg"
import image3 from "../../resources/img/image3.jpg"

const Home1 = () => {
    return (
        <>
            <Title></Title>

            <MainContent>
                <Card 
                    imageLeft 
                    imageSrc={image1}
                    title="Título del ejercicio 1" 
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    linkHref="/"
                    linkText="Ver proyecto" 
                />
                <Card 
                    imageLeft='false' 
                    imageSrc={image2}
                    title="Título del ejercicio 2"  
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    linkHref="/"
                    linkText="Ver proyecto" 
                />
                <Card 
                    imageLeft 
                    imageSrc={image3}
                    title="Título del ejercicio 3" 
                    paragraph="Ipsum duis vestibulum dignissim vel ut sem ipsum felis. Pretium ac commodo volutpat, donec cras integer in."
                    linkHref="/"
                    linkText="Ver proyecto" 
                />
            </MainContent>
        </>
    )
}

export default Home1

