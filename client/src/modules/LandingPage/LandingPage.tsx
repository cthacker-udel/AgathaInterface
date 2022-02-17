import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export const LandingPage = () => {

    return (

        <Container fluid>
            <Row className="mt-4 text-center gy-4">
                <Col>
                    AGATHA PROJECT
                    <div className="p-3">
                        Preview image goes here
                    </div>
                    <div>
                        Button goes here
                    </div>
                </Col>
            </Row>
        </Container>

    );

};