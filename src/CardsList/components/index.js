import React, { useEffect } from "react";
import { ReactComponent as StarIcon } from "../../assets/grade-24px.svg";
import "../styles/cardslist.scss";
import axios from "axios";
import { bindActionCreators } from "redux";

import { addCardToList } from "../actions/actionCreator";
import { connect } from "react-redux";

import data from "../../data.json";
import Card from "./Card";

function CardsList({ cardsList, addCardToList }) {
  useEffect(() => {
    axios
      .get(
        "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json"
      )
      .then(res => {
        addCardToList(res.data);
      })
      .catch(err => {
        console.log(err);
        addCardToList(data);
      });
  }, [addCardToList]);

  return (
    <div>
      <div className="row mb-4 mt-4">
        <div className="col-3 text-center m-auto">
          <h2 className="font-weight-bold most-popular">Most Popular</h2>
          <div className="row font-weight-bold text-success">
            <div className="col-5">
              <hr className="hr-2" />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div className="star-icon">
                <StarIcon />
              </div>
            </div>
            <div className="col-5">
              <hr className="hr-2" />
            </div>
          </div>
        </div>
      </div>

      {cardsList !== undefined &&
        Array(Math.ceil(cardsList.length / 3))
          .fill(0)
          .map((d, i) => (
            <div className="row mb-4 pt-4" key={i}>
              {cardsList.slice(i * 3, (i + 1) * 3).map(cardDetail => (
                <Card cardDetail={cardDetail} key={cardDetail.id} />
              ))}
            </div>
          ))}
    </div>
  );
}

const mapStateToProps = state => ({
  cardsList: state.cardListReducer.cardsList
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addCardToList }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
