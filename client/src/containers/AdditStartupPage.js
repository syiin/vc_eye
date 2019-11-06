import React from "react";
import { Document, Page } from "react-pdf";

import { apiCall, authenticateUser, forwardToken } from "../services/api";
import { addStartupPath } from "../services/paths";

import AdditStartupForm from "../components/AdditStartupForm";

class AdditStartupPage extends React.Component {
  state = {
    startupInfo: {
      startupName: "",
      startupAddress: "",
      startupWebsite: "",
      startupFB: "",
      startupContact: "",
      startupDescription: "",
      pitchdDeck: null,
      logo: null
    },
    numPages: null,
    pageNumber: 1
  };

  onSubmit = event => {
    event.preventDefault();
    const method = "POST";
    const path = addStartupPath;

    var dataToSend = new FormData();
    dataToSend.append("owner", localStorage.getItem("userid"));
    dataToSend.append("startupName", this.state.startupInfo.startupName);
    dataToSend.append("startupAddress", this.state.startupInfo.startupAddress);
    dataToSend.append("startupWebsite", this.state.startupInfo.startupWebsite);
    dataToSend.append("startupFB", this.state.startupInfo.startupFB);
    dataToSend.append("startupContact", this.state.startupInfo.startupContact);
    dataToSend.append(
      "startupDescription",
      this.state.startupInfo.startupDescription
    );
    dataToSend.append("pitchdDeck", this.state.startupInfo.pitchdDeck);
    dataToSend.append("logo", this.state.startupInfo.logo);

    apiCall(method, path, dataToSend).then(res => {
      forwardToken();
      this.props.history.push({
        pathname: "/mydashboard"
      });
    });
  };

  onChange = event => {
    const startupInfo = this.state.startupInfo;
    startupInfo[event.target.name] = event.target.value;
    this.setState({
      startupInfo
    });
  };

  onFile = event => {
    let currentState = { ...this.state };
    if (event.target.id === "pitchDeck") {
      currentState.startupInfo.pitchdeck = event.target.files[0];
      this.setState({ ...currentState });
    } else if (event.target.id === "logo") {
      currentState.startupInfo.logo = event.target.files[0];
      this.setState({ ...currentState });
    }
  };

  onDocumentLoad = ({ numPages }) => {
    let currentState = { ...this.state };
    this.setState({ ...currentState, numPages });
  };

  onNextPage = () => {
    const currentState = { ...this.state };
    const newPage = this.state.pageNumber + 1;
    this.setState({ ...currentState, pageNumber: newPage });
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <AdditStartupForm
          onChange={this.onChange}
          onFile={this.onFile}
          onSubmit={this.onSubmit}
        />
        {this.state.startupInfo.file && (
          <div>
            <Document
              file={this.state.startupInfo.file}
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={this.onNextPage}>Next Page</button>
          </div>
        )}
      </div>
    );
  }
}

export default AdditStartupPage;
