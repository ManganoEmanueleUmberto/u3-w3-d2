import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCompany } from "../redux/actions";
import { useSelector } from "react-redux";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.content);

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {company.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
