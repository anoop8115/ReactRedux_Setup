import React, { useEffect, useState } from "react";
import Form from "../../components/form";
import "../../assets/global.css";
import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFormdata } from "../../redux/actions";
const FormContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.formData);
  const navigate = useNavigate();
  // Initialize state
  const [forms, setForms] = useState(state);

  // Handle form duplication
  const addForm = () => {
    const newForms = [
      ...forms,
      {
        problems_description: "",
        diagnosed_problem: "",
        physical_trauma: "",
        mental_trauma: "",
        problem_frequency: "",
        problem_timing: "",
        others_problem_timing: "",
        problem_intensity: "",
      },
    ];
    setForms(newForms);
  };

  // Handle form deletion
  const removeForm = (index) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  // Update form data
  const updateForm = (index, updatedForm) => {
    const newForms = [...forms];
    newForms[index] = updatedForm;
    setForms(newForms);
  };

  useEffect(() => {
    setForms(state);
  }, [state]);
  const handleSubmit = () => {
    dispatch(setFormdata(forms));

    navigate("/summary");
  };

  const handleResetForm = () => {
    dispatch(
      setFormdata([
        {
          problems_description: "",
          diagnosed_problem: "",
          physical_trauma: "",
          mental_trauma: "",
          problem_frequency: "",
          problem_timing: "",
          others_problem_timing: "",
          problem_intensity: "",
        },
      ])
    );
  };
  return (
    <Container id="body">
      <br></br>
      <center>
        <h4 id="maintitle">Pain & Functional Description</h4>
        <span>
          The description of the current situation gives your Optimum <br></br>{" "}
          Trainer a picture of and clues to the underlying causes of your
          problems
        </span>
      </center>
      <br></br>

      <br></br>

      {/* Render the forms */}
      {forms.map((form, index) => (
        <Form
          key={index}
          formData={form}
          updateForm={(updatedForm) => updateForm(index, updatedForm)}
          removeForm={() => removeForm(index)}
          id={index}
        />
      ))}
      <div id="hrlineOuter">
        <div className="line"></div>
        <div className="addBtn" onClick={addForm}>
          +
        </div>
      </div>
      {/* <hr></hr>
      <button onClick={addForm}>+</button> */}
      <br></br>
      <div id="submitbtn">
        <Button
          color="primary"
          className="btnstyle"
          onClick={() => handleResetForm()}
        >
          RESET
        </Button>
        &nbsp;&nbsp;
        <Button
          color="primary"
          onClick={() => handleSubmit()}
          className="btnstyle"
        >
          NEXT
        </Button>
      </div>
      <br></br>
    </Container>
  );
};

export default FormContainer;
