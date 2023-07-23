import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";
import "../../assets/global.css";
function SummaryPage() {
  const data = useSelector((store) => store.formData);

  const navigate = useNavigate();
  return (
    <div id="body">
      <Container>
        <center>
          <br></br>
          <br></br>
          <h2 id="maintitle">Form Summary</h2>
        </center>
        <br></br>

        {/* <thead>
            <tr>
              <th>#</th>
              <th>Problems Description</th>
              <th>Diagnosed Problem</th>
              <th>Physical Trauma</th>
              <th>Mental Trauma</th>
              <th>Problem Frequency</th>
              <th>Problem Timing</th>
              <th>Others Problem Timing</th>
              <th>Problem Intensity</th>
            </tr>
          </thead> */}
        {/* <tbody>
            {data.length > 0 &&
              data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{++index}</th>
                  <td>{item.problems_description}</td>
                  <td>{item.diagnosed_problem}</td>
                  <td>{item.physical_trauma}</td>
                  <td>{item.mental_trauma}</td>
                  <td>{item.problem_frequency}</td>
                  <td>{item.problem_timing}</td>
                  <td>{item.others_problem_timing}</td>
                  <td>{item.problem_intensity}</td>
                </tr>
              ))}
          </tbody> */}

        {data.length > 0 &&
          data.map((item, index) => (
            <React.Fragment key={index}>
              <br></br>
              <p key={index}>
                <b>Form {index + 1} Data Summary</b>
              </p>
              <Table hover>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Pain & Functional Description</th>
                    <th>Form Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={index}>
                    <th scope="row">{++index}</th>
                    <td>
                      if you have problems with pain/aches, stiffness, weakness
                      or functional problems, description
                    </td>
                    <td>{item.problems_description}</td>
                  </tr>
                  <tr key={index + "a"}>
                    <th scope="row">{++index}</th>
                    <td>Have you been diagnosed with this problem?</td>
                    <td>{item.diagnosed_problem}</td>
                  </tr>
                  <tr key={index + "b"}>
                    <th scope="row">{++index}</th>
                    <td>Did the problem start after a physical trauma?</td>
                    <td>{item.physical_trauma}</td>
                  </tr>
                  <tr key={index + "c"}>
                    <th scope="row">{++index}</th>
                    <td>Did the problem start after a mental trauma?</td>
                    <td>{item.mental_trauma}</td>
                  </tr>
                  <tr key={index + "d"}>
                    <th scope="row">{++index}</th>
                    <td>How often do you experience the problem?</td>
                    <td>{item.problem_frequency}</td>
                  </tr>
                  <tr key={index + "e"}>
                    <th scope="row">{++index}</th>
                    <td>When do you experience the problem?</td>
                    <td>{item.problem_timing}</td>
                  </tr>
                  <tr key={index + "f"}>
                    <th scope="row">{++index}</th>
                    <td>Others Problem experiences</td>
                    <td>{item.others_problem_timing}</td>
                  </tr>
                  <tr key={index + "g"}>
                    <th scope="row">{++index}</th>
                    <td>
                      How intense is the experience of the problem on average on
                      a 0-10 scale?
                    </td>
                    <td>{item.problem_intensity}</td>
                  </tr>
                </tbody>
              </Table>
            </React.Fragment>
          ))}

        <center>
          <Button
            color="primary"
            className="btnstyle"
            onClick={() => navigate("/")}
          >
            BACK
          </Button>
        </center>
        <br></br>
      </Container>
    </div>
  );
}

export default SummaryPage;
