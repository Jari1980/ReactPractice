import React, { memo, useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = memo(function FormComponent({onSubmit}) {

    const [input, setInput] = useState("")
    const [count, setCount] = useState(1)
    
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDetails = {input, count}
        setCount(count + 1)
        //sendDataToParent(input)
        onSubmit(formDetails)
        setInput("")
    }
    


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Skill Title</Form.Label>
        <Form.Control 
        type="text"  
        placeholder="Enter skill"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
      </Form.Group>
      <Button 
      variant="primary"
       type="submit"
       //onClick={handleClick}
       >
        Submit
      </Button>
    </Form>
  );
});

export default FormComponent;
