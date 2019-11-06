import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const LoginForm = ({ onChange, onSubmit }) => {
  return (
    <Card className="container">
      <form action="">
        <Typography gutterBottom variant="headline" component="h1">
          Login
        </Typography>
        <div className="field_line">
          <TextField
            type="text"
            name="username"
            placeholder="Enter username"
            fullWidth={true}
            onChange={onChange}
          />
        </div>
        <div className="field_line">
          <TextField
            type="password"
            name="password"
            placeholder="Enter password"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="button_line">
          <button className="button_style" onClick={onSubmit}>
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
