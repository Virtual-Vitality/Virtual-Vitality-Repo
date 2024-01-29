import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useEffect, useState} from "react";

const workoutPage= () =>{
    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        async function getWorkout() {
            try {
                const { data: getWorkouts } = await axios.get("/api/workouts");
                setWorkout(getWorkouts);
            } catch (error) {
                console.error(error);
            }
        }
        getWorkout();
    }, []);

       return(
          <div>
          <ButtonGroup aria-label="Difficult level">
          <Button variant="secondary">Beginner</Button>
          <Button variant="secondary">Intermediate</Button>
          <Button variant="secondary">Advanced</Button>
          </ButtonGroup>
          
          
         
        
        <div className="grid grid-cols-3 gap-4">
          {exercises.map((exercise) => (

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>workout.name</Card.Title>
            <Card.Text>
              workoutType
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          ))}
        </Card>
        </div>
        </div>
)
}
export default workoutPage