
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Example_function6 = () => {
    return (
        <Container className="max-w-100">
            <div>
            <Container className=" flex">
                <Carousel fade className=" border-orange-400 flex" >
                    <Carousel.Item height={420} width={900} className='p - 0'>
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="first slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0'>
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item height={420} width={900} className='p - 0' >
                        <img
                            width={900} height={420}
                            src="https://images.unsplash.com/photo-1696446700088-3e800f748407?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            </div>
            <Container className=" flex">
                <Card style={{ width: '18rem' }}>
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
                    
                <Card style={{ width: '18rem' }}>
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
            </Container>
        </Container>
    )
}
export default Example_function6