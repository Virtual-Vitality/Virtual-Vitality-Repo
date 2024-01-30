import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useEffect, useState} from "react";
import axios from 'axios';

const workoutPage= () =>{
    const [workouts, setWorkouts] = useState([]);


    useEffect(() => {
        async function getWorkout() {
            try {
                const {data: results} = await axios.get("/api/workouts");
                console.log(results);
                setWorkouts(results);
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
          
          <div >
        <div className="grid grid-cols-3 gap-4">
          {workouts.map((workout) => (
            <Card className=' relative' style={{ width: '18rem'}} key={workout.id}>
              <Card.Body >
                <Card.Title>{workout.WorkoutType.name}</Card.Title>
                {workout.ExcercisesOnWorkouts.map((excerciseOnWorkout) => (
                  <>
                  <Card.Text> excerciseName: {excerciseOnWorkout.exercise.name}</Card.Text>
                <Card.Text> excerciseReps: {excerciseOnWorkout.excerciseReps}</Card.Text>
                <Card.Text> excerciseSets: {excerciseOnWorkout.excerciseSets}</Card.Text>
                </>
                ))}
                <br/>
              </Card.Body>
                <div className=' m-auto mb-3'>
                <iframe width="250" height="150" src={workout.excercise} variant="bottom" title="Exercise Video | Push Ups Video For Editing | Gym Video | Stock Video | Free Footage | Free Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </Card>
          ))}
        </div>
      </div>
      </div>
=======
const Example_function= () =>{
return(
        <Card style={{ width: '18rem' }}
        className=' bg-slate-500 rounded-md p-2'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
>>>>>>> main
)
}
export default workoutPage