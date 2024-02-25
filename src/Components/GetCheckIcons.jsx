const GetCheckIcons = ({ type }) => {
  switch (type) {
    case 'PRESENT':
      return <div className="check type">출석</div>;
    case 'TARDY':
      return <div className="late type">지각</div>;
    case 'ABSENT':
      return <div className="not type">결석</div>;
    case 'OFFICIAL_ABSENT':
      return <div className="vacancy type">공결</div>;
    case 'ILLNESS':
      return <div className="illness type">병결</div>;

    default:
      return <></>;
  }
};

export default GetCheckIcons;
