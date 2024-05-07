import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { removeFromFavorites } from "../redux/actions";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favouritesArray);
  console.log(favourites);
  const dispatch = useDispatch();

  const handleRemoveFromfavourites = (companyId) => {
    dispatch(removeFromFavorites(companyId));
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>Favorite Companies</h1>

      {favourites.map((company) => (
        <Row className="mx-0 mt-3 p-3 w-25" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
          <Col xs={3}>
            <Link to={`/${company.company_name}`}>{company.company_name}</Link>
          </Col>
          <Col xs={9}>
            <Button variant="danger" className="ms-5" onClick={() => handleRemoveFromfavourites(company._id)}>
              Remove
            </Button>
          </Col>
        </Row>
      ))}

      <Link to="/" className="btn btn-primary mt-5">
        Torna alla pagina di ricerca
      </Link>
    </Container>
  );
};

export default FavouritesPage;
