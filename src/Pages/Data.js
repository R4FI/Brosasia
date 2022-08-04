import React from 'react';
import { Container,Card } from 'react-bootstrap';
import './Data.css';
const Data = (props) => {
    const {name,currency,country,numberrange} = props.service;
    return (
        <div className="col-lg-3 col-md-3 col-12">
              <Container >
                  <Card style={{ width: '18rem',height:'13rem' }}>
              <Card.Body>
                 <Card.Title style={{textAlign:'left'}} className="overflow">{name}</Card.Title>
                  <Card.Text style={{textAlign:'left'}}>{currency}</Card.Text>
                  <Card.Text style={{textAlign:'left'}}>{country}</Card.Text>
                  <Card.Text style={{textAlign:'left'}}>Availability:{numberrange}</Card.Text>
              </Card.Body>
              </Card>    
              </Container>    
        </div>
    );
};

export default Data;