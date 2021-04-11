import "./App.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Table,
} from "react-bootstrap";
import searchIcon from "../src/frontend_resources/files/icon_search.svg";
import logo from "../src/frontend_resources/files/logo.png";
import calenderIcon from "../src/frontend_resources/files/icon_calender.svg";
import clip from "../src/frontend_resources/files/icon_clip.svg";
import downArrow from "../src/frontend_resources/files/icon_arrow01.svg";
import mail from "../src/frontend_resources/files/icon_mail_sp.svg";
import rightArrow from "../src/frontend_resources/files/icon_arrow02.svg";
import data from "../src/sampleData.json";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

function App() {
  const [result, setResult] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [dialogData, setDialogData] = useState(null);
  return (
    <Container fluid>
      {result === false && (
        <>
          <div className="background-white full-height d-flex flex-column">
            <Row className="searchRow">
              <Col lg={3} md={4} sm={5} xs={10}>
                <InputGroup className=" my-5">
                  <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="searchBox color-black"
                    value={"2020/1/1 - 2020/1/1 "}
                    disabled
                  />
                  <img
                    src={calenderIcon}
                    alt="calender-icon"
                    className="calender-icon"
                  />
                  <InputGroup.Append>
                    <Button
                      id="basic-addon2"
                      className="searchButton"
                      onClick={() => setResult(true)}
                    >
                      <img
                        src={searchIcon}
                        alt="search_icon"
                        className="search_icon"
                      />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row className="resultRow">
              <Col>
                <p className="mb-0 text-grey font-weight-bold">
                  Result: 0 mail(s)
                </p>
                <hr />
              </Col>
            </Row>

            <LogoRow />
          </div>
        </>
      )}
      {result === true && (
        <>
          <div className="background-white full-height d-flex flex-column">
            <Row className="searchRow">
              <Col lg={3} md={4} sm={5} xs={10}>
                <InputGroup className=" my-5">
                  <FormControl
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="searchBox color-black"
                    value={"2020/1/1 - 2020/1/1 "}
                    disabled
                  />
                  <img
                    src={calenderIcon}
                    alt="calender-icon"
                    className="calender-icon"
                  />
                  <InputGroup.Append>
                    <Button
                      id="basic-addon2"
                      className="searchButton"
                      onClick={() => setResult(false)}
                    >
                      <img
                        src={searchIcon}
                        alt="search_icon"
                        className="search_icon"
                      />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row className="resultRow">
              <Col>
                <p className="mb-0 text-grey font-weight-bold">
                  Result: <span className="font-size-large">10</span> mail(s)
                </p>
              </Col>
            </Row>
            <Row className="tableRow d-none d-md-block">
              <Col>
                <Table className="table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Subject</th>
                      <th>
                        Date{" "}
                        <span className="ml-2">
                          <img
                            src={downArrow}
                            alt="down-arrow"
                            className="down-arrow"
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((item) => (
                      <tr
                        onClick={() => {
                          handleClickOpen();
                          setDialogData(item);
                        }}
                      >
                        <td>{item.from}</td>
                        <td className="d-flex justify-content-between">
                          {item.to.item}
                          {item.to.numberOfRec !== null && (
                            <span className="greyBox">
                              +{item.to.numberOfRec}
                            </span>
                          )}
                        </td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <p className="mb-0 tableCell3TextWidth">
                              {item.subject.item}
                            </p>
                            {item.subject.clip && (
                              <img src={clip} alt="clip" className="clip" />
                            )}
                          </div>
                        </td>
                        <td className="font-weight-bold">2:40</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row className="d-md-none mobile-version">
              <Col>
                <Row>
                  <Col className="d-flex py-2 mb-version-header-bg">
                    <p className="mb-0 font-weight-bold">
                      From
                      <span className="ml-2 py-2">
                        <img
                          src={downArrow}
                          alt="down-arrow"
                          className="down-arrow"
                        />
                      </span>
                    </p>
                    <p className="mx-2 mb-0">|</p>
                    <p className="mb-0">To</p>
                    <p className="mx-2 mb-0">|</p>
                    <p className="mb-0">Subject</p>
                    <p className="mx-2 mb-0">|</p>
                    <p className="mb-0">Date</p>
                  </Col>
                </Row>
                {data.data.map((item) => (
                  <Row
                    onClick={() => {
                      handleClickOpen();
                      setDialogData(item);
                    }}
                  >
                    <Col className="py-3 mb-version-desc-item-container">
                      <Row>
                        <Col className="d-flex">
                          <img src={mail} alt="mail" className="mail" />
                          <div className="mb-email-head-desc m-2">
                            <div className="d-flex justify-content-between">
                              <p className="mb-0 font-weight-bold">
                                {item.from}
                              </p>
                              <div className="d-flex">
                                {item.subject.clip && (
                                  <img src={clip} alt="clip" className="clip" />
                                )}
                                <p className="mb-0">{item.date}</p>
                                <span className="ml-2">
                                  <img
                                    src={rightArrow}
                                    alt="rightArrow"
                                    className="rightArrow"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <p className="mb-0">{item.to.item}</p>
                              {item.to.numberOfRec !== null && (
                                <span className="greyBox">
                                  +{item.to.numberOfRec}
                                </span>
                              )}
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="mb-0">{item.subject.item}</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </div>
        </>
      )}
      {dialogData !== null && (
        <>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              id="customized-dialog-title"
              className="dialogTitle"
              onClose={handleClose}
            >
              {dialogData.subject.item}
            </DialogTitle>
            <DialogContent dividers>
              <div>
                <p>
                  <span className="font-weight-bold">From:</span>{" "}
                  {dialogData.from}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-weight-bold">To:</span>{" "}
                  {dialogData.to.item}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-weight-bold">Subject:</span>{" "}
                  {dialogData.subject.item}
                </p>
              </div>
              <div>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Container>
  );
}
function LogoRow() {
  return (
    <Row className="logoRow">
      <Col className="h-100 d-flex align-items-center justify-content-center">
        <img src={logo} alt="logo" />
      </Col>
    </Row>
  );
}

export default App;
