import { faEnvelope, faLock, faSignInAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <div className="row my-4" style={{ justifyContent: "center" }}>
        <div className="col-md-3 com-md-offset-3">
          <Card>
            <Card.Header> Login Form</Card.Header>
            <Form>
              <Card.Body>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" type="submit">
                    <FontAwesomeIcon icon={faSignInAlt}/>{' '}
                    Login
                </Button>{' '}
                <Button variant="primary" type="reset">
                    <FontAwesomeIcon icon={faUndo}/>{' '}
                    Reset
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </div>
      </div>
    </Container>
  );
}
