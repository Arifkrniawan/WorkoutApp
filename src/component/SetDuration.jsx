import React from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function SetDuration(props) {
  return (
    <div class="SD">
      <div class="firstContent">
        <img src="/sign.png" alt="sign" />
        <div>
          <h3>Set Duration</h3>
          <p>Adjust your set duration</p>
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

export default SetDuration;
