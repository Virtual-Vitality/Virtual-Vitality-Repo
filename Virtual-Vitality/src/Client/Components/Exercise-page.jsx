import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState} from "react";


const Exercises= () =>{
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function getExercises() {
            try {
                const { data: foundExercises } = await axios.get("/api/exercises");
                console.log(foundExercises)
                setExercises(foundExercises);
            } catch (error) {
                console.error(error);
            }
        }
        getExercises();
    });
    console.log(exercises);
    return(
        exercises.map((exercise) => {
            return(
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" alt='Exercise Photo' />
      <Card.Body>
        <Card.Title>{exercise.title}</Card.Title>
        <Card.Text> Muscle Group: {exercise.muscleGroup}</Card.Text>
        <Card.Text> Description: {exercise.description}</Card.Text>
        <Card.Text> Video Link: {exercise.videoLink}</Card.Text>
      </Card.Body>
    </Card>
            )
        })
    )
}
export default Exercises;