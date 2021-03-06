import React, { useState } from "react";
import Title from "./components/Title";
import PhotoWall from "./components/PhotoWall";
import AddPhoto from "./components/PhotoWall";

import { Route, Link, NavLink, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-europeanbest-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink:
        "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }
  ]);

  const removedPhoto = postRemoved => {
    console.log(postRemoved.description);
    setPosts(posts.filter(post => post !== postRemoved));
  };

  return (
    <div className="App">
      <Route exact path="/" render={() => (
      <div>
          <Title />
      <Container>
        <Row>
          <Col sm>Love</Col>
          <Col sm>
            <PhotoWall
              setPosts={posts}
              posts={posts}
              onPhotoRemoved={removedPhoto}
            />
          </Col>
          <Col sm>Love is Sweet</Col>
        </Row>
      </Container>
      <NavLink to="/">PhotoWall</NavLink>
      </div>
      )} />
    </div>
  );
}

export default App;
