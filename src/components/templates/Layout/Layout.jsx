import React from "react";
import { Container, Paper, Box } from "@material-ui/core";
import { Wrapper, Content } from "./Layout.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Container maxWidth="md">
          <Paper>
            <Box p={2} m={3}>
              {props.children}
            </Box>
          </Paper>
        </Container>
      </Content>
      <Footer />
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  //console.log("appState", state && state.registration);
  return state;
};
export default connect(mapStateToProps, null)(Layout);
