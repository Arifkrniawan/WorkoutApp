import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

function RestDuration(props) {
  return (
    <div class="RD">
      <div class="firstContent">
        <HistoryOutlinedIcon
          style={{
            color: "#0082CC",
            fontSize: "70px",
            left: "2em",
            margin: "auto 5px auto 0",
            border: "2px",
            fontWeight: "400px"
          }}
        />
        <div>
          <h3>Rest Duration</h3>
          <p>Adjust your rest duration</p>
        </div>
      </div>

      <form action="" class="buttons">
        <button class="decrease">
          <ArrowBackIosOutlinedIcon
            style={{
              color: "#0082CC",
              fontSize: "40px",
              position: "absolut",
              margin: "20 20",
              transform: "rotate(-180deg)"
            }}
          />
        </button>
        <div id="inputBox">
          <input class="inputBoxx" type="number" value="0s" min="0" max="10" />
        </div>

        <button class="increase">
          <ArrowForwardIosOutlinedIcon
            style={{
              color: "#0082CC",
              fontSize: "40px",
              position: "absolut",
              margin: "20 20"
            }}
          />
        </button>
      </form>
    </div>
  );
}

export default RestDuration;
