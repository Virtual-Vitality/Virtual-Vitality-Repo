import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useEffect, useState} from "react";
import { } from 'react-bootstrap';


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
        <div >
        <div className="grid grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card style={{ width: '18rem' }} key={exercise.id}>
              <Card.Img width="250" height="150" variant="top" src={} alt='Exercise Photo' />
              <Card.Body >
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text> Muscle Group: {exercise.muscleGroup}</Card.Text>
                <Card.Text> Description: {exercise.description}</Card.Text>
                <iframe width="250" height="150" src={exercise.videoLink} title="Exercise Video | Push Ups Video For Editing | Gym Video | Stock Video | Free Footage | Free Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
export default Exercises;