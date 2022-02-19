import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {

    return (

        <Container fluid>
            <div className={`${styles.landing_page_button} ${styles.row_height}`}>
                AGATHA PROJECT
            </div>
        </Container>

    );

};