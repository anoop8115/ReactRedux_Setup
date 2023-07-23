import React from "react";
import "../assets/global.css";
import { Col, Label, Row } from "reactstrap";
import { Button } from "reactstrap";
// Create a single form component
const Form = ({ formData, updateForm, removeForm, id }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    updateForm(updatedForm);
  };

  const handleRemove = () => {
    removeForm();
  };

  return (
    <div>
      <br></br>
      <form>
        <Row>
          {id !== 0 ? (
            <>
              <br></br>
              <hr></hr>
            </>
          ) : null}

          <Col lg="12" md="12" sm="12">
            <Label>
              if you have problems with pain/aches, stiffness, weakness or
              functional problems, describe this/these below. (List the symptoms
              in descending order with the most troublesome first)
            </Label>
            <textarea
              name="problems_description"
              style={{
                width: "100%",
              }}
              rows="3"
              value={formData.problems_description}
              onChange={handleChange}
            />
          </Col>

          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">
              Have you been diagnosed with this problem?
            </Label>
            &nbsp;&nbsp;&nbsp;
            <input
              className="labelspace"
              type="radio"
              name="diagnosed_problem"
              value="Not relevant"
              onChange={handleChange}
              checked={formData.diagnosed_problem === "Not relevant"}
            />
            <Label className="labelspace">Not relevant</Label>
            <input
              className="labelspace"
              type="radio"
              name="diagnosed_problem"
              value="yes"
              checked={formData.diagnosed_problem === "yes"}
              onChange={handleChange}
            />
            <Label className="labelspace">Yes</Label>
            <input
              className="labelspace"
              type="radio"
              name="diagnosed_problem"
              value="no"
              checked={formData.diagnosed_problem === "no"}
              onChange={handleChange}
            />
            <Label className="labelspace">No</Label>
          </Col>
          <br />
          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">
              Did the problem start after a physical trauma?
            </Label>
            &nbsp;
            <input
              className="labelspace"
              type="radio"
              name="physical_trauma"
              value="Not relevant"
              checked={formData.physical_trauma === "Not relevant"}
              onChange={handleChange}
            />
            <Label className="labelspace">Not relevant</Label>
            <input
              className="labelspace"
              type="radio"
              name="physical_trauma"
              value="yes"
              checked={formData.physical_trauma === "yes"}
              onChange={handleChange}
            />
            <Label className="labelspace">Yes</Label>
            <input
              className="labelspace"
              type="radio"
              name="physical_trauma"
              value="no"
              checked={formData.physical_trauma === "no"}
              onChange={handleChange}
            />
            <Label className="labelspace">No</Label>
          </Col>
          <br />
          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">
              Did the problem start after a mental trauma?
            </Label>
            &nbsp;&nbsp;&nbsp;
            <input
              className="labelspace"
              type="radio"
              name="mental_trauma"
              value="Not relevant"
              checked={formData.mental_trauma === "Not relevant"}
              onChange={handleChange}
            />
            <Label className="labelspace">Not relevant</Label>
            <input
              className="labelspace"
              type="radio"
              name="mental_trauma"
              value="yes"
              checked={formData.mental_trauma === "yes"}
              onChange={handleChange}
            />
            <Label className="labelspace">Yes</Label>
            <input
              className="labelspace"
              type="radio"
              name="mental_trauma"
              value="no"
              checked={formData.mental_trauma === "no"}
              onChange={handleChange}
            />
            <Label className="labelspace">No</Label>
          </Col>
          <br />
          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">
              How often do you experience the problem?
            </Label>
          </Col>
          <Col lg="12" md="12" sm="12">
            <input
              type="radio"
              name="problem_frequency"
              value="Not relevant"
              checked={formData.problem_frequency === "Not relevant"}
              onChange={handleChange}
            />
            <Label className="labelspace">Not relevant</Label>

            <input
              className="labelspace"
              type="radio"
              name="problem_frequency"
              value="Daily"
              checked={formData.problem_frequency === "Daily"}
              onChange={handleChange}
            />
            <Label className="labelspace">Daily</Label>

            <input
              className="labelspace"
              type="radio"
              name="problem_frequency"
              value="Several times/week"
              checked={formData.problem_frequency === "Several times/week"}
              onChange={handleChange}
            />
            <Label className="labelspace">Several times/week</Label>

            <input
              className="labelspace"
              type="radio"
              name="problem_frequency"
              value="A few times/month"
              checked={formData.problem_frequency === "A few times/month"}
              onChange={handleChange}
            />
            <Label className="labelspace">A few times/month</Label>

            <input
              className="labelspace"
              type="radio"
              name="problem_frequency"
              value="A few times/year"
              checked={formData.problem_frequency === "A few times/year"}
              onChange={handleChange}
            />
            <Label className="labelspace">A few times/year</Label>
          </Col>
          <br />
          <br />
          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">When do you experience the problem?</Label>
          </Col>
          <Col lg="6" md="6" sm="12">
            <input
              type="checkbox"
              name="problem_timing"
              value="Not relevant"
              checked={formData.problem_timing === "Not relevant"}
              onChange={handleChange}
            />
            <Label className="labelspace"> Not relevant</Label>
            <br></br>
            <input
              type="checkbox"
              name="problem_timing"
              value="When lying down"
              checked={formData.problem_timing === "When lying down"}
              onChange={handleChange}
            />
            <Label className="labelspace"> When lying down</Label>
            <br></br>
            <input
              type="checkbox"
              name="problem_timing"
              value="When sitting"
              checked={formData.problem_timing === "When sitting"}
              onChange={handleChange}
            />
            <Label className="labelspace"> When sitting</Label>
            <br></br>
            <input
              type="checkbox"
              name="problem_timing"
              value="Under standing"
              checked={formData.problem_timing === "Under standing"}
              onChange={handleChange}
            />
            <Label className="labelspace"> Under standing</Label>
            <br></br>
            <input
              type="checkbox"
              name="problem_timing"
              value="In walking"
              checked={formData.problem_timing === "In walking"}
              onChange={handleChange}
            />
            <Label className="labelspace"> In walking</Label>
          </Col>
          <Col lg="6" md="6" sm="12">
            <textarea
              name="others_problem_timing"
              style={{
                width: "100%",
              }}
              rows="3"
              value={formData.others_problem_timing}
              onChange={handleChange}
              placeholder="Other? For example in rotations, side bends, wing stairs, when working with the arms above the head."
            />
          </Col>
          <br />
          <br />
          <Col lg="12" md="12" sm="12">
            <Label className="mt-4">
              How intense is the experience of the problem on average on a 0-10
              scale?
            </Label>
          </Col>
          <Col lg="12" md="12" sm="12">
            <table>
              <tbody>
                <tr>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <td className="cellwidth" key={item}>
                      {item}
                    </td>
                  ))}
                </tr>
                <tr>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <td className="cellwidth" key={item}>
                      <input
                        type="radio"
                        name="problem_intensity"
                        value={item}
                        checked={parseInt(formData.problem_intensity) === item}
                        onChange={handleChange}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </form>
      {id !== 0 ? (
        <>
          <br></br>
          <Button onClick={handleRemove} size="sm" color="danger">
            Remove Form
          </Button>
          <hr></hr>
        </>
      ) : null}

      <br></br>
    </div>
  );
};
export default Form;
