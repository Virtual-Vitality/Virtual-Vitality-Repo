import Card from 'react-bootstrap/Card';
import axios from "axios";
import React, { useEffect, useState} from "react";



const Exercises= () =>{
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function getExercises() {
            try {
                const { data: foundExercises } = await axios.get("/api/exercises");
                setExercises(foundExercises);
            } catch (error) {
                console.error(error);
            }
        }
        getExercises();
    }, []);

    return (
        <div >
        <div className="grid grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card style={{ width: '18rem' }} key={exercise.id}>
              <Card.Img width="100%" height="150" variant="top" src={exercise.imgUrl} alt='Exercise Photo' />
              <Card.Body >
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text> Muscle Group: {exercise.muscleGroup}</Card.Text>
                <Card.Text> Description: {exercise.description}</Card.Text>
                <iframe width="250" height="150" src={exercise.videoLink} variant="bottom" title="Exercise Video | Push Ups Video For Editing | Gym Video | Stock Video | Free Footage | Free Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
export default Exercises;