import React, { useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const navigateToLogin = () => {
        setTimeout(() => {
            navigate('/app/login');
            setLoading(false);
        }, 5000);
        setLoading(true);
    }
    return (

        <Container fluid className={`${styles.landing_page_container} ${styles.row_height}`}>
            <div className={`${styles.landing_page_button}`}>
                AGATHA PROJECT
            </div>
            <div className={`${styles.landing_page_button_div}`}>
                {
                    !loading ?
                    <Button variant="outline-success" className={`${styles.landing_page_button}`} onClick={navigateToLogin}>
                        Enter Project
                    </Button>
                    :
                    <Spinner animation="border" variant="primary" />
                }
            </div>
        </Container>

    );

};