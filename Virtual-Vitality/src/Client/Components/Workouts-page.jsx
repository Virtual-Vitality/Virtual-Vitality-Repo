import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ExerciseDetails from './SingleWorkout-page';
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Exercise Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ExerciseDetails exerciseOnWorkout={props.selectedExercise} />
      </Modal.Body>
      <Modal.Footer>
        <Button style={{color:'black'}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const workoutPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState(null);

  const [workouts, setWorkouts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust as needed

  const filteredWorkouts = difficultyFilter
    ? workouts.filter(workout => workout.difficulty === difficultyFilter)
    : workouts;

  const totalPages = Math.ceil(filteredWorkouts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredWorkouts.length);
  const [modalShow, setModalShow] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {

    async function getWorkout() {
      try {
        const { data: results } = await axios.get("/api/workouts");
        setWorkouts(results);
      } catch (error) {
        console.error(error);
      }
    }
    getWorkout();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const generateRandomColor = () => {
    // Generate a random hex color
    // const minBrightness = 50;
    // const maxBrightness = 80;

    // const getRandomValue = () => Math.floor(Math.random() * (maxBrightness - minBrightness) + minBrightness);
    // const letters = '0123456789ABCDEF';
    // let color = `#${getRandomValue().toString(16)}${getRandomValue().toString(16)}${getRandomValue().toString(16)}`;
    // // for (let i = 0; i < 6; i++) {
    // //   color += letters[Math.floor(Math.random() * 16)];
    // // }
    // return color;
    const minLightness = 70;
    const maxLightness = 90;

    const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const hue = getRandomValue(0, 360); // Random hue
    const saturation = getRandomValue(40, 60); // Adjust saturation for a more colorful look
    const lightness = getRandomValue(minLightness, maxLightness); // Random lightness

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const handleDetailButtonClick = (exerciseOnWorkout) => {
    console.log("Exercise details:", exerciseOnWorkout);
    if (exerciseOnWorkout && exerciseOnWorkout) {
        setSelectedExercise(exerciseOnWorkout);
        setModalShow(true);
    } else {
        console.error("Exercise data is invalid:", exerciseOnWorkout);
    }
};

  
  // console.log(selectedExercise)
  return (
    <div>
      <ButtonGroup aria-label="Difficult level">
        <Button variant="secondary" onClick={() => setDifficultyFilter("Beginner")}>Beginner</Button>
        <Button variant="secondary" onClick={() => setDifficultyFilter("Intermediate")}>Intermediate</Button>
        <Button variant="secondary" onClick={() => setDifficultyFilter("Advanced")}>Advanced</Button>
      </ButtonGroup>
      <div className="grid grid-cols-3 gap-4">
        {filteredWorkouts.slice(startIndex, endIndex).map((workout, workoutIndex) => {
          return(
          <Card className='relative' style={{ maxWidth: '12rem', height: '480px', margin: '0 auto', marginBottom: '15px', marginTop: '15px' }} key={workout.id}>
            <Card.Body style={{ fontSize: '0.9rem' }}>
              <Card.Title style={{ borderBottom: '2px solid #ccc', background: '#f0f0f0', fontSize: '1.1rem' }}>
                {workout.workoutType.name}
              </Card.Title>
              <div style={{ borderTop: '2px solid #ccc', background: '#e0e0e0', padding: '8px' }}>
                {workout.exercisesOnWorkouts.map((exerciseOnWorkout, index) => (
                  <div key={index} style={{ backgroundColor: generateRandomColor(), padding: '10px', marginBottom: '10px', borderRadius: '8px', fontSize: "0.8rem" }}>
                    <Card.Text> exerciseName: {exerciseOnWorkout.exercise.name}</Card.Text>
                    <Card.Text> exerciseReps: {exerciseOnWorkout.exerciseReps}</Card.Text>
                    <Card.Text> exerciseSets: {exerciseOnWorkout.exerciseSets}</Card.Text>
                    <Button variant="outline-secondary" size="sm" style={{ fontSize: "0.7rem", color: "black" }} onClick={() => handleDetailButtonClick(exerciseOnWorkout.exercise)}>
                      Details
                    </Button>
                  </div>
                ))}
              </div>
              <br />
            </Card.Body>
          </Card>
        )})}
      </div>
      <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedExercise={selectedExercise}
      />
    </>

      {totalPages > 1 && (
        <div style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button type="Button" key={index + 1} variant="outline-secondary" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
export default workoutPage;