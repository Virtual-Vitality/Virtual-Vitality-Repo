import React from 'react';

const ExerciseDetails = ({ exerciseOnWorkout }) => {
  console.log('Exercise Details Props:', exerciseOnWorkout);

  if (!exerciseOnWorkout) {
    console.warn('No exercise details available.');
    return <div>No exercise details available.</div>;
  }

  return (
    <div>
      <h5>{exerciseOnWorkout.name}</h5>
      <p>Muscle Group: {exerciseOnWorkout.muscleGroup}</p>
      <p>Description: {exerciseOnWorkout.description}</p>
    </div>
  );
};

export default ExerciseDetails;

