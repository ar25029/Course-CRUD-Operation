import React, {useEffect} from "react";
import { Button, Container,  } from "reactstrap";

function Home() {

  useEffect(()=>{
    document.title= "Home Course || Physics Tutor"
  },[])

  return (
    <div>
      <div className="rounded" style={{textAlign:"center"}}>
        <h1>Learn Physics</h1>
        <p>
          This course is Developed for Physics student who want to become a
          machine dependent things and enhance the productive of product and
          reduce human efforts.
        </p>
        <Container>
          <Button color="primary " outline>
            Start Using
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Home;
