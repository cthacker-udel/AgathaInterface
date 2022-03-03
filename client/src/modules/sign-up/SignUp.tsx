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

import { addUser } from '../../api/client-side/user/adduser';

type Error = {
  time: DateTime;
  reason: string;
  errorTitle: string;
  show?: boolean;
  variant?: string;
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

  const submitUser = async () => {
    const checked = password === confirmPassword && email.length >= 6;
    if (!checked) {
      console.log("errors = ", errors);
      if (
        password !== confirmPassword ||
        password.length === 0 ||
        confirmPassword.length === 0
      ) {
        setErrors((oldErrors) => {
          return [
            ...oldErrors,
            {
              time: DateTime.now(),
              reason: "Both passwords must be the same",
              errorTitle: "Password Error",
              show: true,
              variant: "danger"
            },
          ];
        });
      }
      if (email.length < 6) {
        setErrors((oldErrors) => {
          return [
            ...oldErrors,
            {
              time: DateTime.now(),
              reason: "Email invalid",
              errorTitle: "Email Error",
              show: true,
              variant: "danger"
            },
          ];
        });
      }
    } else {
        const response = await addUser(email, password);
        if (response) {
            setTimeout(() => {
                navigate('/app/login');
            }, 3000);
            setErrors((oldErrors) => {
                return [
                    ...oldErrors,
                    {
                        time: DateTime.now(),
                        reason: "Successful Account Creation!",
                        errorTitle: "Account Created Successfully!",
                        show: true,
                        variant: "success"
                    }
                ]
            })
        } else {
            setErrors((oldErrors) => {
                return [
                    ...oldErrors,
                    {
                        time: DateTime.now(),
                        reason: "Invalid Sign Up: Something went wrong",
                        errorTitle: "Invalid Creation",
                        show: true,
                        variant: "danger"
                    }
                ]
            })
        }
    }
  };

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
                  onChange={(e) =>
                    setConfirmPassword((oldVal) => e.target.value)
                  }
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
            onClick={async () => {
              await submitUser();
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
      <ToastContainer className="p-3 mt-5" position="top-end">
        {errors.map((e: Error, idx: number) => {
          return (
            <Toast
              onClose={() => {
                setErrors((oldErrors) => {
                    oldErrors[idx].show = false;
                    return [...oldErrors];
                })
              }}
              show={e.show}
              delay={3000 * (idx + .5)}
              autohide
              key={idx}
              bg={e.variant ? e.variant : "danger" }
            >
              <Toast.Header closeButton={true}>
                <div>{e.errorTitle}</div>
              </Toast.Header>
              <Toast.Body>{e.reason}</Toast.Body>
            </Toast>
          );
        })}
      </ToastContainer>
    </>
  );
};
