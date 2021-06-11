import styled from "styled-components";
import Header from "components/header/header";
import Footer from "components/footer/footer";
import Landing from "pages/landing/landing";
import Details from "pages/details/details";
import ThreeCompass from "pages/threeCompass/threeCompass";
import ThreeTanks from "pages/threeTanks/threeTanks";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <PageLayoutContainer>
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route exact path={"/home"} component={Landing} />
            <Route
              exact
              path={"/details/threeCompass"}
              component={ThreeCompass}
            />
            <Route exact path={"/details/threeTanks"} component={ThreeTanks} />
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
  grid-template-rows: 5rem 1fr 5rem;
  /* grid-gap: 20px; */
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const ContentContainer = styled.div`
  grid-area: content;
  /* padding: 10px; */
`;

export default Routes;
