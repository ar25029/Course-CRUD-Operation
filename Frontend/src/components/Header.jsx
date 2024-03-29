import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name }) {
  return (
    <div>
      <Card className="my-1 bg-warning">
        <CardBody>
          <h1 className="text-center my-2">
            Welcome to Physics Tutorial Point
          </h1>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
