import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useEffect, useState} from "react";


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
    }, []);
    console.log(exercises);

    return (
        <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card style={{ width: '18rem' }} key={exercise.id}>
              <Card.Img variant="top" src="holder.js/100px180" alt='Exercise Photo' />
              <Card.Body>
                <Card.Title>{exercise.title}</Card.Title>
                <Card.Text> Muscle Group: {exercise.muscleGroup}</Card.Text>
                <Card.Text> Description: {exercise.description}</Card.Text>
                <Card.Text> Video Link: {exercise.videoLink}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
export default Exercises;