import Card from "react-bootstrap/Card";
export default function WelcomeCard() {
  return (
    <Card className="welcome" >
      <Card.Img  variant="top" src="https://www.shutterstock.com/image-photo/lets-eat-food-catering-cuisine-260nw-423464437.jpg" />
      <Card.Body>
        <Card.Text>
          This app can help you track your daily diet goal. 
          Search for a food by
          it's name or barcode and enjoy it!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
