import React from "react";
import Hero from "../components/Hero";
import { Col, Row, Container } from "../components/Grid";


function About() {
  return (
    <div>
      <Hero backgroundImage="../assets/images/sunsetBeer.jpg">
        <h1>Juliette's Beer Cooler</h1>
        <h2>It tastes so good once it hits your lips!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome Juliette's Beer Cooler!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to the party!  Be sure to check out Juliette's cooler for all the best beers.
              Search for your favorite beer.  If you don't see what you want, feel free to contribute to keep
              the party rolling.   Also, be sure to make note if you do or do not like the beer so Juliette's
              cooler has only the most sought after beers.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
