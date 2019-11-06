import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";

const SignUpForm = ({ onChange, onSubmit, onCheck }) => {
  return (
    <div style={{ height: "100%" }}>
      <Card className="container">
        <CardContent
          style={{
            align: "center",
            height: "100%",
            color: "white"
          }}
        >
          <form action="">
            <Typography gutterBottom variant="headline" component="h2">
              Sign Up
            </Typography>
            <div className="field_line">
              <TextField
                type="text"
                name="email"
                placeholder="Your email"
                fullWidth={true}
                onChange={onChange}
              />
            </div>
            <div className="field_line">
              <TextField
                type="text"
                name="company"
                placeholder="Your company"
                fullWidth={true}
                onChange={onChange}
              />
            </div>

            <div className="field_line">
              <TextField
                type="text"
                name="username"
                placeholder="Your username"
                fullWidth={true}
                onChange={onChange}
              />
            </div>

            <div className="field_line">
              <TextField
                type="password"
                name="password"
                placeholder="Your password"
                fullWidth={true}
                onChange={onChange}
              />
            </div>

            <div className="field_line">
              <Checkbox name="isStartup" onChange={onCheck} />
              I am a startup <br />
              <Checkbox name="isInvestor" onChange={onCheck} />
              I am an investor <br />
            </div>
            <div className="button_line">
              <button className="button_style" onClick={onSubmit}>
                Sign Up
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
