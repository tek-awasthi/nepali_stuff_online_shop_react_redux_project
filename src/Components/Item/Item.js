import React, { Component } from "react";
import "./Item.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItemInCart } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";

class ConnectedItem extends Component {
  render() {
    return (
      <div
        className="item"
        style={{
          height: this.props.mini ? "220px" : "320px",
          width: this.props.mini ? "170px" : "220px",
        }}
        onClick={() => {
          this.props.history.push("/details/" + this.props.item.id);
        }}
      >
        <div
          style={{
            color: "white",
            margin: 5,
            fontSize: 18,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {this.props.item.name}
        </div>
        <div
          style={{
            height: this.props.mini ? 160 : 210,
            width: this.props.mini ? 170 : 270,
          }}
        >
          {" "}
          <img
            alt={this.props.item.name}
            height={this.props.mini ? 160 : 210}
            width={this.props.mini ? 170 : 220}
            src={this.props.item.imageURL}
          />{" "}
        </div>
        <div style={{ color: "white", float: "left", margin: 10, fontSize: 16 }}>
          Price: Rs {this.props.item.price}
        </div>
        

        {!this.props.mini && (
          <div className="details-btn-div">
            <Button style = {{color : "white"}}
              onClick={(e) => {
                e.stopPropagation();

                this.props.history.push("/details/" + this.props.item.id);
              }}
            >
              View
            </Button>
          </div>
        )}
        {!this.props.mini && (
          <div className="add-btn-div">
            <Button style={{color : "white"}}
              onClick={(e) => {
                e.stopPropagation();
                this.props.dispatch(
                  addItemInCart({ ...this.props.item, quantity: 1 })
                );
              }}
              color="primary"
              aria-label="Add to shopping cart"
            >
              Add to Cart
            </Button>
                </div>
                
        )}
      </div>
    );
  }
}

export default withRouter(connect()(ConnectedItem));
