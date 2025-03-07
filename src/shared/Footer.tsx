import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { styled } from "@mui/styles";
import theme from "./theme";
import { Link } from "react-router-dom";
import { Routes } from "./Routes.constants";

const FooterHolder = styled("div")({
  width: "100%",
  height: 100,
  backgroundColor: theme.palette.primary.dark,
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 20,
  paddingBottom: 20,
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    height: "auto",
    flexDirection: "column",
  },
});

const LinkHolder = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginRight: "50px",
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
    marginRight: 0,
  },
});

function Footer() {
  const md = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <FooterHolder>
      <Typography
        variant={md ? "body2" : "body1"}
        color={theme.palette.primary.light}
        style={
          md
            ? { maxWidth: "70%" }
            : { textAlign: "left", marginLeft: "50px", maxWidth: "40%" }
        }
      >
        © Copyright 2022 Edugator @ University of Florida Research Foundation,
        Inc. All Commercial Rights Reserved.
      </Typography>

      <LinkHolder>
        <Link
          to={Routes.PrivacyNotice}
          style={{ textDecoration: "none" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Typography
            variant={md ? "body2" : "body1"}
            color={theme.palette.primary.light}
          >
            Privacy Terms
          </Typography>
        </Link>
        <Link
          to={Routes.TermsOfUse}
          style={{ textDecoration: "none" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Typography
            variant={md ? "body2" : "body1"}
            color={theme.palette.primary.light}
          >
            Terms of use
          </Typography>
        </Link>
        <Link
          to={Routes.FERPA}
          style={{ textDecoration: "none" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Typography
            variant={md ? "body2" : "body1"}
            color={theme.palette.primary.light}
          >
            FERPA
          </Typography>
        </Link>
      </LinkHolder>
    </FooterHolder>
  );
}

export default Footer;
