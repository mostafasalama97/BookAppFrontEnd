import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import styles from "./MainSection.module.css"; // Import external CSS module

export default function MainSection() {
  return (
    <>
    <div className={styles["main-section"]}>
      <h1>
        Best selling Book <Badge bg="secondary">IN 2023</Badge>
      </h1>

      <div className={styles["card-container"]}>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]} variant="top" src="src/Components/HomePage/MainSection/R.jpg" />
          
          <Card.Body>
            <Card.Title>Conan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]}  variant="top" src="" />
          
          <Card.Body>
            <Card.Title>Naruto</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]} variant="top" src="" />
          <Card.Body>
            <Card.Title>One Piece</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
    </div>


    <div className={styles["main-section"]}>
      <h1>
        Best Author <Badge bg="secondary">IN 2023</Badge>
      </h1>

      <div className={styles["card-container"]}>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]} variant="top" src="src/Components/HomePage/MainSection/R.jpg" />
          
          <Card.Body>
            <Card.Title>Mostafa Salama</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]}  variant="top" src="" />
          
          <Card.Body>
            <Card.Title>Odaa</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className={styles["imagess"]} variant="top" src="" />
          <Card.Body>
            <Card.Title>Mostafa Salama</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </div>
    </div>
    </>
    
  );
}
