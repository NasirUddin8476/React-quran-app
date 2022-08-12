import Container from "react-bootstrap/Container";
import Chapters from "./component/Chapters";
import Topbar from "./component/Navbar";

const App = () => {
  // useEffect(() => {
  //   (async () => {
  //     const chapter = await chapters();
  //     console.log(chapter);
  //   })();
  // }, []);

  return (
    <>
      <Topbar />
      <Container>
        <Chapters />
      </Container>
    </>
  );
};

export default App;
