import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Pdf from "react-to-pdf";

const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="container">
      <div><Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf></div>
      <h1 className="text-center mb-4">Question</h1>
     <div ref={ref}>
      
     <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1.Tell us the differences between uncontrolled and controlled
            components.
          </Accordion.Header>
          <Accordion.Body>
            Ans: In React, a controlled component is a component that is
            controlled by React state, while an uncontrolled component is a
            component that maintains its own internal state.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2.How to validate React props using PropTypes ?
          </Accordion.Header>
          <Accordion.Body> Ans:
            <p>
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components.
            </p>
            <p>
              We can use React props, short for properties, to send data from
              one component to another. If a component receives the wrong type
              of props, it can cause bugs and unexpected errors in your app.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3.Tell us the difference between nodejs and express js.
          </Accordion.Header>
          <Accordion.Body> Ans:
            <p>
              {" "}
              <span className="text-center">Express.js</span> <br />
              1.It is used to build web-apps using approaches and principles of
              Node.js.
              <br />
              2.More features than Node.js.
              <br />
              3.Framework based on Node.js.
              <br />
              4.It requires less coding time.
            </p>
            <p>
              <span className="text-center">Node.js</span> <br />
              1.It is used to build server-side, input-output, event-driven
              apps.
              <br />
              2.Fewer features.
              <br />
              3.Run-time platform or environment designed for server-side
              execution of JavaScript.
              <br />
              4.It requires more coding time.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4.What is a custom hook, and why will you create a custom hook?
          </Accordion.Header>
          <Accordion.Body>
           Ans: A custom hook is a JavaScript function that starts with the prefix
            "use" and follows the rules of React hooks, which allows you to
            reuse stateful logic in your React components. Custom hooks allow
            you to encapsulate complex logic into a single function and reuse it
            across multiple components, making your code more modular and easier
            to maintain.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
     </div>
    </div>
  );
};

export default Blogs;
