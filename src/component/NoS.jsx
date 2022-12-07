import React from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function NoS(props) {
  return (
    <div class="nos">
      <div class="firstContent">
        <TimerOutlinedIcon
          style={{
            color: "#0082CC",
            fontSize: "70px",
            left: "2em",
            margin: "auto 5px auto 0",
            border: "2px",
            fontWeight: "400px"
          }}
        />
        <div class="lastContent">
          <h3>Number of Set</h3>
          <p>Adjust your number of set</p>
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
          <input class="inputBoxx" type="number" value="0" min="0" max="10" />
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

export default NoS;
