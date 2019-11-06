import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const AdditStartupForm = ({ onChange, onFile, onSubmit }) => {
  return (
    <Card className="container">
      <form action="">
        <Typography
          gutterBottom
          variant="headline"
          component="h1"
          align="center"
        >
          Edit Startup
        </Typography>
        <div className="field_line">
          <TextField
            type="text"
            name="startupName"
            placeholder="Enter Startup Name"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="field_line">
          <TextField
            type="text"
            name="startupAddress"
            placeholder="Enter Startup Address"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="field_line">
          <TextField
            type="text"
            name="startupWebsite"
            placeholder="Enter Startup Website"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="field_line">
          <TextField
            type="text"
            name="startupFB"
            placeholder="Enter Startup Facebook"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="field_line">
          <TextField
            type="text"
            name="startupContact"
            placeholder="Enter Startup Contact Address"
            fullWidth={true}
            onChange={onChange}
          />
        </div>

        <div className="field_line">
          <TextField
            type="text"
            name="startupDescription"
            placeholder="Your Elevator Pitch"
            onChange={onChange}
            multiline={true}
            fullWidth={true}
            rows="10"
          />
        </div>

        <div className="field_line">
          <label className="custom-file-upload">
            <input type="file" id="logo" onChange={onFile} />
            Upload Startup Logo
          </label>
        </div>

        <div className="field_line">
          <label className="custom-file-upload">
            <input type="file" id="pitchDeck" onChange={onFile} />
            Upload Your Pitch Deck
          </label>
        </div>
        <div className="button_line">
          <button className="button_style" onClick={onSubmit}>
            Add/Edit Startup Info
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AdditStartupForm;
