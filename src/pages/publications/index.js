import React from "react";
import styles from "./index.module.css";
import Title from "../../components/title";
import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Publications" />
      <Origamis />
    </PageLayout>
  );
};

export default Publications;
