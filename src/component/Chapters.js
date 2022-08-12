import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { chapters } from "../services/chapterService";
import SurahList from "./SurahList";

const Chapters = () => {
  const [chapterName, setChapterName] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const chapter = await chapters();
        setChapterName(chapter?.data?.chapters || []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="mt-4">
      <Row>
        <Col>
          {chapterName.map((name, i) => (
            <SurahList name={name} count={i + 1} key={i} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Chapters;
