import React from 'react';
import { Container,Card } from 'react-bootstrap';

const Data = (props) => {
    const {name,currency,country,numberrange} = props.service;
    return (
        <div>
              <Container >
                  <Card style={{ width: '18rem',height:'10rem' }}>
              <Card.Body>
                 <Card.Title>{name}</Card.Title>
                  <Card.Text> {currency}
                  </Card.Text>
                  <Card.Text> {country}
                  </Card.Text>
                  <Card.Text>Availability: {numberrange}
                  </Card.Text>
              </Card.Body>
              </Card>    
              </Container>    
        </div>
    );
};

export default Data;