import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const navigateToLogin = () => {
    setTimeout(() => {
      navigate("/app/login");
      setLoading(false);
    }, 4200);
    setLoading(true);
  };

  return (
    <Container
      fluid
      className={`${styles.landing_page_container} ${styles.row_height}`}
    >
      <Row>
        <Col>
          <div className={`${styles.landing_page_header} ml-5`}>AGATHA PROJECT</div>
          <div className={`${styles.landing_page_button_div}`}>
            {!loading ? (
              <Button variant="outline-success" onClick={navigateToLogin} className={`${styles.landing_page_button}`}>
                Enter Project
              </Button>
            ) : (
                <>
                    Loading...
                </>
                // <div className={`${styles.landing_page_spinner}`}>
                //     <Spinner animation="border" variant="primary"/>
                // </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
