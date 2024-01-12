import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState} from "react";


const Exercises= () =>{
    const [exercises, setExercises] = useState("");

    useEffect(() => {
        const getExercises = async () => {
            try {
                const { data: foundExercises } = await axios.get("/api/exercises");
                setExercises(foundExercises);
            } catch (error) {
                console.error(error);
            }
        }
        getExercises();
    });

    return(
        exercises.map((exercise) => {
            return(
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt='Exercise Photo' />
      <Card.Body>
        <Card.Title>{exercise.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            )
        })
    )
}
export default Exercises;