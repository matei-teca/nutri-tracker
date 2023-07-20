import Card from "react-bootstrap/Card";
export default function WelcomeCard({ searchNames }) {
  return (
    !searchNames && (
      // <Card className="welcome">
      //   <Card.Img
      //     variant="top"
      //     src="https://www.shutterstock.com/image-photo/lets-eat-food-catering-cuisine-260nw-423464437.jpg"
      //   />
      //   <div
      //     style={{
      //       backgroundColor: "WHITE",
      //       width: "300px",
      //       heigth: "200px",
      //       marginLeft: "300px",
      //       marginTop: "-30px",
      //     }}
      //   >
      //     .
      //   </div>
      //   <Card.Body>
      //     <Card.Text>
      //       This app can help you track your daily diet goal. Search for a food
      //       by it's name or barcode and enjoy it!
      //     </Card.Text>
      //   </Card.Body>
      // </Card>

      <div className="welcome-message--container">
        <div className="welcome-message">
          Welcome!
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            porttitor nunc. Integer condimentum, justo nec bibendum euismod,
            orci massa suscipit purus, in placerat lectus lacus a ligula. Donec
            sodales, felis nec semper sagittis, purus neque tempor nisl, ac
            pharetra metus tellus vel elit. Sed ultrices, nunc nec tincidunt
            varius, sapien nibh facilisis odio, elementum faucibus augue nisi
            vel massa. Ut tempus vitae enim eu congue. Vivamus sodales, orci ac
            condimentum aliquet, magna sapien eleifend orci, vel suscipit lectus
            risus pellentesque neque. Ut velit augue, commodo non scelerisque
            consectetur, tempus id diam. Suspendisse sed nulla in ante fermentum
            elementum quis non libero. 
            </p>

            <p>
            Sed porttitor sodales lectus quis
            lobortis. In hac habitasse platea dictumst. Aliquam massa velit,
            congue in varius et, blandit a libero. In ac molestie diam. In in
            dui eget sapien imperdiet condimentum. Aenean ac sem finibus,
            imperdiet ipsum vel, semper arcu. Sed maximus eget metus a congue.
            Praesent nec odio erat. Integer gravida non enim facilisis maximus.
            Praesent nec volutpat sapien.
          </p>
        </div>
      </div>
    )
  );
}
