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
      <div className="container-fluid">
        <div className="d-flex flex-wrap m-10">
          {exercises.map((exercise) => (
            <div className="m-2" key={exercise.id} style={{ maxWidth: '300px', width: '100%' }}>
              <Card className="h-100">
                <Card.Img variant="top" src={exercise.imgUrl} alt="Exercise Photo" />
                <Card.Body>
                  <Card.Title>{exercise.name}</Card.Title>
                  <Card.Text>Muscle Group: {exercise.muscleGroup}</Card.Text>
                  <Card.Text>Description: {exercise.description}</Card.Text>
                </Card.Body>
                <div className="m-auto mb-3">
                  <iframe
                    width="100%"
                    height="150"
                    src={exercise.videoLink}
                    title="Exercise Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Exercises;