import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderSummary from "./OrderSummary/components";
import CardsList from "./CardsList/components";
import Header from "./CommonModule/Header";
import { connect } from "react-redux";

function AppRouter({ selectedCards }) {
  return (
    <Router>
      <Header
        noOfItems={selectedCards.reduce(
          (accumulator, currValue, currIndex, wholeArray) =>
            accumulator + currValue.quantity,
          0
        )}
      />
      <section className="container">
        <Switch>
          <Route path="/order-summary">
            <OrderSummary />
          </Route>
          <Route path="/">
            <CardsList />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

const mapStateToProps = state => ({
  selectedCards: state.cardListReducer.selectedCards || []
});

export default connect(mapStateToProps)(AppRouter);
