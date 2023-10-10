import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function OneSeatModal({ isOpen, closeModal, content }) {
  const [studentId, setStudentId] = useState(""); // 여기서 useState를 사용하려면 React import를 추가해야 합니다.

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleReserveClick = () => {
    if (!studentId) {
      // 학번이 입력되지 않았을 때 alert로 메시지 표시
      alert("학번을 입력하세요.");
    } else {
      // 학번이 입력되었을 때 예약 로직을 처리할 수 있습니다.
      // 이 부분은 실제 예약 로직을 구현해야 합니다.
      alert(`학번 ${studentId}으로 ${content}좌석 예약을 진행합니다.`);
      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h1>{content}</h1>
      <h2>좌석을 예약하시겠습니까?</h2>
      <p>학번을 입력하세요:</p>
      <input type="text" value={studentId} onChange={handleStudentIdChange} />
      <button onClick={handleReserveClick}>예약</button>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  );
}

export default OneSeatModal;
