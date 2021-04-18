import styled from "styled-components";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Landing from "pages/landing/landing";
import Details from "pages/details/details";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <PageLayoutContainer>
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path={"/home"} component={Landing} />
            <Route exact path={"/details/:detailId"} component={Details} />
          </Switch>
        </ContentContainer>
        <Footer />
      </PageLayoutContainer>
    </BrowserRouter>
  );
}

const PageLayoutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-gap: 20px;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const ContentContainer = styled.div`
  grid-area: "content";
  padding: 10px;
`;

export default Routes;
