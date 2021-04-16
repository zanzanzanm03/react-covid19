import React from "react";
import "../App.css";
import { Card, CardText, CardTitle, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";

class Covid extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <div className="back">
        <br/>
        <br/>
        <div className="header">
          <CardTitle tag="h1">
            สถานการณ์ของผู้ติดเชื้อ Covid-19 ในประเทศไทย ณ ปัจจุบัน
          </CardTitle>
          <br/>
          <br/>
          <CardTitle tag="h4">ข้อมูลของวันที่ {data.UpdateDate}</CardTitle>
        </div>
        <div className="right-content">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <Card body inverse color="Confirmed">
                <CardTitle tag="h3">มีผู้ติดเชื้อสะสม</CardTitle>
                <CardText>
                  <h1>
                    <NumberFormat
                      value={data.Confirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h1>
                </CardText>
                <CardText tag="h3">
                  [ +
                  <NumberFormat
                    value={data.NewConfirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card body inverse color="Recovered">
                <CardTitle tag="h3">ผู้ที่หายแล้ว</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="Hospitalized">
                <CardTitle tag="h3">ผู้ที่ยังรักษาอยู่ใน รพ.</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Hospitalized}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewHospitalized}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="Deaths">
                <CardTitle tag="h3">ผู้เสียชีวิต</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
          </Row>
          <div className="footer">
          <a href="https://covid19.th-stat.com/">
            แหล่งที่มา : https://covid19.th-stat.com/
          </a>
        </div>
        </div>
      </div>
    );
  }
}
export default Covid;
