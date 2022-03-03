import React, { useState } from "react";
import { DateTime } from "luxon";
import {
  Form,
  Card,
  Button,
  InputGroup,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { Eye } from "react-feather";
import { useNavigate } from "react-router-dom";

type Error = {
  time: DateTime;
  reason: string;
  errorTitle: string;
  show?: boolean;
};

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState<{
    actual: boolean;
    confirm: boolean;
  }>({ actual: false, confirm: false });
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Error[]>([]);

  return (
    <>
      <Card bg="light" className="w-75 mx-auto">
        <Card.Body>
          <Card.Title className="text-center mb-4">Sign Up Form</Card.Title>
          <hr />
          <Form>
            <Form.Group className="mb-3 mt-2" controlId="form-sign-up">
              <Form.Label className="text-center mx-auto w-100">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                className="mx-auto w-50"
                placeholder="Enter email"
                onChange={(e) => setEmail((oldEmail) => e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="form-sign-up-pass">
              <Form.Label className="text-center mx-auto w-100">
                Password
              </Form.Label>
              <InputGroup className="mb-3 mx-auto w-50">
                <Form.Control
                  type={showPassword.actual ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword((oldPass) => e.target.value)}
                  value={password}
                />
                <Button
                  onClick={() => {
                    setShowPassword((oldValue) => {
                      return { ...oldValue, actual: !oldValue.actual };
                    });
                  }}
                >
                  <span style={{ fontSize: ".9em" }}>
                    {showPassword.actual ? "Hide" : "Show"} Password
                  </span>{" "}
                  <Eye className="ml-1" />
                </Button>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="form-sign-up-confirm-pass"
            >
              <Form.Label className="text-center mx-auto w-100">
                Confirm Password
              </Form.Label>
              <InputGroup className="mb-3 mx-auto w-50">
                <Form.Control
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword((oldVal) => e.target.value)}
                  value={confirmPassword}
                />
                <Button
                  onClick={() => {
                    setShowPassword((oldValue) => {
                      return { ...oldValue, confirm: !oldValue.confirm };
                    });
                  }}
                >
                  <span style={{ fontSize: ".9em" }}>
                    {showPassword.confirm ? "Hide" : "Show"} Password
                  </span>{" "}
                  <Eye className="ml-1" />
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="mx-auto w-100 text-center">
          <Button
            variant="outline-success"
            onClick={() => {
              console.log("submitted");
            }}
          >
            Submit
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => {
              navigate("/app/login");
            }}
          >
            Cancel
          </Button>
        </Card.Footer>
      </Card>
      {errors.length > 0 ? (
        <ToastContainer className="p-3" position="top-end">
          {errors.map((e: Error) => {
            return (
              <Toast
                onClose={() => {
                  e.show = false;
                }}
                show={e.show}
                delay={3000}
                autohide
              >
                <Toast.Header closeButton={true}>
                  {e.errorTitle}
                  <small>
                    {DateTime.now().minus(e.time).toFormat("HH mm ss from now")}
                  </small>
                </Toast.Header>
                <Toast.Body>{e.reason}</Toast.Body>
              </Toast>
            );
          })}
        </ToastContainer>
      ) : (
        <></>
      )}
    </>
  );
};
