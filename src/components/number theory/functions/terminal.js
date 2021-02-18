import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Constants from "../../../constants/constants";
import { useEffect, useState } from "react";

export default function Terminal(props) {
  //   const [text, setText] = useState(text);

  return (
    <div>
      <Col
        style={{
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <Row style={{ padding: 0, margin: 0 }}>
          <Col style={{ padding: 0, margin: 0 }}>
            <textarea
              readOnly
              value={props.text.join("\n")}
              type="text"
              placeholder="Answer will be shown here"
              readOnly
              style={{
                fontSize: "small",
                color: "#04e000",
                padding: 8,
                height: props.height,
                width: "100%",
                backgroundColor: Constants.MONOKAI,
                borderRadius: 4,
                border: "1px solid #272822",
              }}
            ></textarea>
          </Col>
        </Row>
        <Row></Row>
      </Col>
    </div>
  );
}
