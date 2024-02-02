import React from 'react';

const ExerciseDetails = ({ exercise }) => {
  return (
    <div>
      <h5>{exercise.name}</h5>
      <p>Muscle Group: {exercise.muscleGroup}</p>
      <p>Description: {exercise.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ExerciseDetails;