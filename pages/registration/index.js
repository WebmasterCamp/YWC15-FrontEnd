import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Footer from '../../components/Footer';
import TabPanel from '../../components/TabPanel';
import FormContainer from '../../components/FormContainer';

injectGlobal`
  body {
    background: linear-gradient(#037289, #5e4a88) fixed;
    margin: 0;
    height: 100vh;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
  position: absolute;
  z-index: 999;
`;

const ContentContainer = styled.div`
  width: 1100px;
  display: flex;
  margin: auto auto;
  
  & > div:nth-child(1) {
    width: 200px;
  }
  
  & > div:nth-child(2) {
    flex: 1;
  }
`;

const Logo = styled.div`
  background: url(/static/img/logo.svg) no-repeat;
  background-position: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;
  margin-left: -30px;
  height: 200px;
  background-size: 400px;
`;

export default class extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <ContentContainer>
          <div>
            <TabPanel />
          </div>
          <div>
            <FormContainer>
              <div>Praesentium labore repellendus optio veniam corporis iusto pariatur earum in hic quibusdam libero molestiae accusantium asperiores rem, sequi, voluptates sint eos architecto id ullam nobis maxime quo fugit aliquam? Placeat!</div>
              <div>Nesciunt labore officiis at aspernatur saepe consequuntur eligendi asperiores itaque voluptatum, laborum, assumenda inventore, aut odio delectus hic velit minima. Excepturi natus ipsa quisquam vitae beatae neque maiores nobis molestiae.</div>
              <div>Nesciunt labore officiis at aspernatur saepe consequuntur eligendi asperiores itaque voluptatum, laborum, assumenda inventore, aut odio delectus hic velit minima. Excepturi natus ipsa quisquam vitae beatae neque maiores nobis molestiae.</div>
              <div>Ullam temporibus voluptates officia saepe sapiente molestias a eius corrupti, in blanditiis pariatur, magnam, iusto repudiandae rerum quasi esse mollitia odio architecto! Excepturi dignissimos sapiente id velit illo nam repudiandae!</div>
              <div>Ducimus at nemo consectetur fugiat eaque ullam praesentium optio laudantium rem rerum nulla ea veritatis, officia, ad mollitia asperiores iusto. Nisi dolores illum minus ex tempore natus amet, officia dolore.</div>
              <div>Aperiam sed ipsa molestiae repellat quam commodi, cumque ipsam vero, quae, eos ab. Blanditiis dicta obcaecati ea officiis doloremque quisquam voluptatem delectus quaerat, laborum praesentium nam earum enim ipsam, numquam.</div>
              <div>Fugiat et distinctio necessitatibus optio esse voluptate maiores facilis cum unde natus possimus numquam, quis iste! Beatae tenetur, quae sapiente quia impedit quibusdam corporis, totam vero explicabo eos quasi! Error?</div>
            </FormContainer>
            
            <FormContainer>
              <button disabled>SUBMIT</button>
            </FormContainer>
          </div>
        </ContentContainer>
        <Footer />
      </Container>
    );
  }
}