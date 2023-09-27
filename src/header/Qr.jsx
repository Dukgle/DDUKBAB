import React, { useState } from 'react';
import Modal from 'react-modal';
import QrIcon from '../icon/icon-qr-code.png';
import QrImg from '../img/QR_example.png';

function Qr() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);       // 모달창이 열릴 수 있는 상태
    };

    const closeModal = () => {
        setModalIsOpen(false);      // 모달창을 닫을 수 있는 상태
    };

    return (
        <>
            <button className="qr-button" onClick={openModal}>
                <img src={QrIcon} alt="QR Code" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="QR Code Modal"
                className="qr-modal-container"
            >
                <h4>예약한 좌석</h4>
                <h1>A-1</h1>
                <h4>남은 시간</h4>
                <img src={QrImg} alt='QR 코드 예시입니다.' className="qr-img"></img>
            </Modal>
        </>
    );
}

export default Qr;
