import React from "react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="test-3xl">HomePage</h1>

      <Button variant="outline" size="lg" className="capitalize m-8">
        {" "}
        Click me
      </Button>
    </div>
  );
};

export default HomePage;
