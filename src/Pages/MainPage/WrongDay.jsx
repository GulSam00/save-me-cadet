import { NotValid } from 'Components';

const WrongDay = ({ wrongType }) => {
  return <NotValid code={wrongType} />;
};

export default WrongDay;
