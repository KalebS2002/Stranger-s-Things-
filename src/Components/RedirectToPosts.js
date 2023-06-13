import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class RedirectToPosts extends React.Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/posts" />;
    }
  };
}
export default RedirectToPosts;
