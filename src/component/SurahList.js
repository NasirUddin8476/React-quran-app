import Alert from "react-bootstrap/Alert";

const SurahList = ({ name, count }) => {
  return (
    <Alert key={1} variant={count % 2 === 0 ? "primary" : "success"}>
      <strong>
        {count} <span>{name?.name_simple}</span>
      </strong>
    </Alert>
  );
};

export default SurahList;
