import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import GaugeChart from 'react-gauge-chart'
import "./CSS/Dronestats.css"
import DroneFPV from '../Asset/DJI_0002.mp4';

const Dronestats = ({ history }) => {
  // สร้าง state เพิ่มเติมสำหรับการตรวจจับการเคลื่อนไหว
  const [motionDetected, setMotionDetected] = useState(false);

  const [groundSpeed, setGroundSpeed] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [distanceToWP, setDistanceToWP] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [verticalSpeed, setVerticalSpeed] = useState(0);
  const [distanceToGround, setDistanceToGround] = useState(0);

  const generateRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGroundSpeed(generateRandomValue(0, 30));
      setAltitude(generateRandomValue(0, 120));
      setDistanceToWP(generateRandomValue(0, 1000));
      setYaw(generateRandomValue(0, 360));
      setVerticalSpeed(generateRandomValue(0, 10));
      setDistanceToGround(generateRandomValue(0, 120));

      // ตรวจสอบการเคลื่อนไหว หากมีการเคลื่อนไหวมากกว่าค่าที่กำหนดให้ true
      if (parseFloat(groundSpeed) > 20 || parseFloat(verticalSpeed) > 5) {
        setMotionDetected(true);
      } else {
        setMotionDetected(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="drone-status-page">
      <div className="left-section">
        <div className="rotation-section">
          <div className="rotation-info">
            <h2>ความเร่ง</h2>
            <GaugeChart
              id="drone-rotation-gauge"
              nrOfLevels={30}
              colors={["#FF5F6D", "#FFC371"]}
              arcWidth={0.3}
              percent={yaw / 360}
            />
          </div>
        </div>
        <div className="stats-section">
          <div className="stats-info">
            <h2>สถานะของโดรน</h2>
            <div className="stats-display">
              <div className="stats-item">
                <p class="stats-item-topic">ความเร็วบนพื้น</p>
                <p>{groundSpeed} กม./ชม.</p>
              </div>
              <div className="stats-item">
                <p class="stats-item-topic">ความสูง</p>
                <p>{altitude} เมตร</p>
              </div>
              <div className="stats-item">
                <p class="stats-item-topic">ระยะทางไปยังจุดที่ตั้งไว้</p>
                <p>{distanceToWP} เมตร</p>
              </div>
              <div className="stats-item">
                <p class="stats-item-topic">Yaw (องศา)</p>
                <p>{yaw} องศา</p>
              </div>
              <div className="stats-item">
                <p class="stats-item-topic">ความเร็วแนวดิ่ง</p>
                <p>{verticalSpeed} กม./ชม.</p>
              </div>
              <div className="stats-item">
                <p class="stats-item-topic">ระยะทางไปยังพื้นดิน</p>
                <p>{distanceToGround} เมตร</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="fov-video">
          <h2 style={{ color: "white" }}>การมองภาพจากโดรน</h2>
          <video autoPlay loop muted playsInline src={DroneFPV}></video>
        </div>
        <div className="motion-detected">
          <h2>การเคลื่อนไหว</h2>
          <p>{motionDetected ? "มีการเคลื่อนไหวมาก" : "ไม่มีการเคลื่อนไหวมาก"}</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dronestats);
