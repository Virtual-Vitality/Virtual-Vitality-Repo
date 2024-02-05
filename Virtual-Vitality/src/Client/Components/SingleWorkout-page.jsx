import React from 'react';

const ExerciseDetails = ({ exerciseOnWorkout }) => {
  console.log('Exercise Details Props:', exerciseOnWorkout);

  if (!exerciseOnWorkout) {
    console.warn('No exercise details available.');
    return <div>No exercise details available.</div>;
  }

  return (
    <div>
      <h5>{exerciseOnWorkout.exercise.name}</h5>
      <p>Muscle Group: {exerciseOnWorkout.exercise.muscleGroup}</p>
      <p>Description: {exerciseOnWorkout.exercise.description}</p>
    </div>
  );
};

export default ExerciseDetails;

