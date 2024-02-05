import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ExerciseDetails from './SingleWorkout-page';

const workoutPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState(null);

  const [workouts, setWorkouts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(null);
  const itemsPerPage = 3; // Adjust as needed

  const filteredWorkouts = difficultyFilter
    ? workouts.filter(workout => workout.difficulty === difficultyFilter)
    : workouts;

  const totalPages = Math.ceil(filteredWorkouts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredWorkouts.length);


  useEffect(() => {
    async function getWorkout() {
      try {
        const { data: results } = await axios.get("/api/workouts");
        console.log(results);
        setWorkouts(results);
      } catch (error) {
        console.error(error);
      }
    }
    getWorkout();
  }, []);

  const handlePageChange = (page) => {
    console.log('Hello')
    console.log(page);
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

  const handleDetailButtonClick = (index) => {
    setSelectedExerciseIndex(index);
  };

  return (
    <div>
      <ButtonGroup aria-label="Difficult level">
        <Button variant="secondary" onClick={() => setDifficultyFilter("Beginner")}>Beginner</Button>
        <Button variant="secondary" onClick={() => setDifficultyFilter("Intermediate")}>Intermediate</Button>
        <Button variant="secondary" onClick={() => setDifficultyFilter("Advanced")}>Advanced</Button>
      </ButtonGroup>
      <div className="grid grid-cols-3 gap-4">
        {filteredWorkouts.slice(startIndex, endIndex).map((workout, workoutIndex) => {
          console.log(workout)
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
                    <Button variant="outline-secondary" size="sm" style={{ fontSize: "0.7rem", color: "black" }} onClick={() => handleDetailButtonClick(index)}>
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
      {selectedExerciseIndex !== null && (
        <ExerciseDetails exerciseOnWorkout={filteredWorkouts[startIndex + selectedExerciseIndex]?.exercisesOnWorkouts[selectedExerciseIndex]} />
      )}

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