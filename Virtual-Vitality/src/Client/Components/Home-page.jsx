
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Example_function6 = () => {
    return (
        <Container className="max-w-100 h-screen">
            <div>
            <Container className="">
                <Carousel fade className=" border-orange-400" >
                    <Carousel.Item height={420} width={900} className='p - 0 d-flex justify-content-center'>
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0 d-flex justify-content-center' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0 d-flex justify-content-center' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0 d-flex justify-content-center'>
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0 d-flex justify-content-center' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1696446700088-3e800f748407?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            </div>
           <br></br>
            <Container className="  relative d-flex justify-content-center">
                
                <Card className='relative' style={{ width: '18rem', height: '21rem'}}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYSUyMHN0cmV0Y2h8ZW58MHx8MHx8fDA%3D" />
                    <Card.Body>
                        <Card.Title>READY, SET, FLEX</Card.Title>
                        <Card.Text>
                            On February 29, 2024 Coach Seb will be hosting a yoga session to relax the body and mind @5pm. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                    
                <Card className='relative' style={{ width: '18rem', height: '21rem'}}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1517438322307-e67111335449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN3ZWF0fGVufDB8fDB8fHww" />
                    <Card.Body>
                        <Card.Title>Lemme see them hands</Card.Title>
                        <Card.Text>
                            Join us on @3:30 pm March 21, 2024,  to sweat those calories off with light boxing techniques, shawdow boxing and breathing skills.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='relative' style={{ width: '18rem', height: '21rem' }}>
                    <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhlYWx0aHl8ZW58MHx8MHx8fDA%3D" />
                    <Card.Body>
                        <Card.Title>Nutritional </Card.Title>
                        <Card.Text>
                            Every Sunday @3pm est, our Nutritionist Jennifer speaks on topics to make dieting and eating healthier a breeze!!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='relative' style={{ width: '18rem', height: '21rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV4ZXJjaXNlfGVufDB8fDB8fHww" />
                    <Card.Body>
                        <Card.Title>Aerobics</Card.Title>
                        <Card.Text>
                           We are going to get our heart pumping with some cardio Aerobics on April 4, 2024 @ 7pm.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}
export default Example_function6