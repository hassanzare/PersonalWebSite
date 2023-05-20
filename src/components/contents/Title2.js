import { useEffect, useState } from "react";
import pic from "../../resources/images/Untitled.jpg";
import { getRemaindingTimeUntilMsTimestap } from "./uti/CountdownTimerUtils";

const Title2 = ({ countdownTimestampMs }) => {
  const defaultRemainingTime = {
    seconds: "47",
    minutes: "51",
    hours: "23",
    days: "02",
  };

  const [remainingTime, setRemainigTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainigTime(getRemaindingTimeUntilMsTimestap(countdown));
  }

  return (
    <div className="title">
      <div className="container-text" style={{ padding: "0" }}>
        <div className="countdown-timer">
          <div className="group">
            <div className="value days">{remainingTime.days}</div>
            <div className="unit">Days</div>
          </div>
          <div className="group">
            <div className="value hours">{remainingTime.hours}</div>
            <div className="unit">Hrs</div>
          </div>
          <div className="group">
            <div className="value minute">{remainingTime.minutes}</div>
            <div className="unit">Min</div>
          </div>
          <div className="group">
            <div className="value seconds">{remainingTime.seconds}</div>
            <div className="unit">Sec</div>
          </div>
        </div>
        <div
          style={{
            background: `url(${pic})`,
            width: "300px",
            height: "200px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Title2;
