import React, { Component } from "react";
import styles from "./index.module.css";
import Title from "../../components/title";
import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import UserContext from '../../Context';

class Publications extends Component {

  static contextType = UserContext;

  render() {
    return (
      <PageLayout>
        <Title title="Publications" />
        <Origamis />
      </PageLayout>
    );
  }
}

export default Publications;
