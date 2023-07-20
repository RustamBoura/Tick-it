import { Form, Container, Button } from "react-bootstrap";

const AddComment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Comment submitted!");
  };
  return (
    <Container className="pt-3" style={{ maxWidth: "400px" }}>
      <h4>Add a Comment!</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddComment;
