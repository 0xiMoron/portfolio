"use client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { InfoCard } from "./models/info-card-model";
import { EnglishIntroCard, InfoCardList } from "./constants/info-cards";
import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Home() {
  const [displayedCard, setDisplayCard] = useState(EnglishIntroCard);

  const switchInfoCard = (isForward: boolean) => {
    let currentCardIndex = InfoCardList.indexOf(displayedCard);
    let lastCardIndex = InfoCardList.length - 1;

    // forwards scrolling
    if (isForward && currentCardIndex !== lastCardIndex) {
      setDisplayCard(InfoCardList[currentCardIndex + 1]);
    }
    if (isForward && currentCardIndex === lastCardIndex) {
      setDisplayCard(InfoCardList[0]);
    }

    // backwards scrolling
    if (!isForward && currentCardIndex !== 0) {
      setDisplayCard(InfoCardList[currentCardIndex - 1]);
    }
    if (!isForward && currentCardIndex === 0) {
      setDisplayCard(InfoCardList[lastCardIndex]);
    }
  };

  return (
    <main className="main-page">
      <section className="header-section">
        <h1 className="header-title">Harrison Kaide Hancock</h1>
      </section>
      <section className="card-section">
        <MDBBtn
          tag="a"
          color="none"
          className="m-5"
          style={{ color: "#7ab97a" }}
          onClick={() => {
            switchInfoCard(false);
          }}>
          <MDBIcon fas icon="angle-left" size="3x" />
        </MDBBtn>
        <MDBCard className="card info-card">
          <MDBCardBody>
            <MDBCardTitle>{displayedCard.title}</MDBCardTitle>
            <hr></hr>
            <MDBCardText>{displayedCard.description}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBBtn
          tag="b"
          color="none"
          className="m-5"
          style={{ color: "#7ab97a" }}
          onClick={() => {
            switchInfoCard(true);
          }}>
          <MDBIcon fas icon="angle-right" size="3x" />
        </MDBBtn>
      </section>
      <section className="footer-section"></section>
    </main>
  );
}
