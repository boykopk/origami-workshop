import React from 'react';
import PageLayout from '../../components/page-layout';
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from './index.module.css';
import Origamis from '../../components/origamis';


const ShareToughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>
        <div>
          <TextArea defaultValue="Publication..." />
        </div>
        <div>
          <SubmitButton title="Post" />
        </div>
      </Container>
      <Origamis length={3} />
    </PageLayout>
  );
};

const Container = styled.div`
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  resize: none;
`;

export default ShareToughtsPage;