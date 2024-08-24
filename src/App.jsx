import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [title, setTitle] = useState("My name is Sanket");

  function changeTitle() {
    setTitle("My name is : " + Math.random());
  }

  return (
    <Fragment>
      <button onClick={changeTitle}>update My name 1</button>
      <Header title={title}></Header>
      <Header title="Sanket2"></Header>
      <Header title="Sanket2"></Header>
      <Header title="Sanket2"></Header>
      <Header title="Sanket2"></Header>
    </Fragment>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

// Add prop-types validation
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
