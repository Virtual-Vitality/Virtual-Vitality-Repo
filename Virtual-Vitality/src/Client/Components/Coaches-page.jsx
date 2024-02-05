import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Coaches = () => {
  //create endpoint get call
  //add handleSubmit
  //use useState to track inputs and save them to variables to input
  //into get request


  const [coaches, setCoaches] = useState([]);


  useEffect(() => {
    async function getCoaches() {
      try {
        const { data: foundCoaches } = await axios.get("/api/coaches")
        setCoaches(foundCoaches);
      } catch (error) {
        console.error(error);
      }
    }
    getCoaches();
  }, []);

  return (
    <div>
      <h1> MEET OUR COACHES</h1>
     
     <div className="grid grid-cols-3 gap-4">
          {coaches.map((coach) => (
            <Card style={{ width: '18rem'}} key={coach.id}
            className='border-zinc-950 border-3'>
              <Card.Img width="100%" height="150" variant="top" src={coach.imgURL} alt='Coach Photo' />
              <Card.Body >
                <Card.Title>{coach.name}</Card.Title>
                <Card.Text>{coach.workoutTypes}</Card.Text>
                <br/>
              </Card.Body>
            </Card>
          ))}
        </div>
     

    </div>
  )
}
export default Coaches;


