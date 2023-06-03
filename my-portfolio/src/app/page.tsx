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

  const setSpecificCard = (index: number) => {
    setDisplayCard(InfoCardList[index]);
  };

  return (
    <main className="main-page">
      <section className="header-section">
        <h1 className="header-title">Harrison Kaide Hancock</h1>
      </section>
      <section className="links-sections">
        <div className="links-box">
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/harrison-hancock/">
            <MDBIcon fab icon="linkedin" size="lg" />
          </MDBBtn>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/0xiMoron">
            <MDBIcon fab icon="github" size="lg" />
          </MDBBtn>
          {/* <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#">
            <MDBIcon fab icon="google" size="lg" />
          </MDBBtn> */}
        </div>
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
        <MDBCard className="card info-card fade-in" id="display-card">
          <MDBCardBody>
            <MDBCardTitle className="card-title">
              {displayedCard.title}
            </MDBCardTitle>
            <hr></hr>
            <MDBCardText className="card-text">
              {displayedCard.description}
            </MDBCardText>
            <section className="skills-icon-section">
              {displayedCard.icons?.map((el, i) => {
                return (
                  <MDBIcon
                    fab
                    fas
                    className="m-1"
                    key={i}
                    size="2x"
                    icon={el}
                  />
                );
              })}
            </section>
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
      <section className="footer-section">
        <div className="footer-title-and-links">
          <p className="footer-title">Card links!</p>
          <div className="footer-links">
            {InfoCardList.map((el, i) => {
              return (
                <MDBBtn
                  key={i}
                  className="mx-2"
                  color="tertiary"
                  rippleColor="light"
                  onClick={() => {
                    setSpecificCard(i);
                  }}>
                  <p className="card-link-title">{el.title}</p>
                </MDBBtn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
