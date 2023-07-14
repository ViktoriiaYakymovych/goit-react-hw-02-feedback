import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <Div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </Div>
      <p>Total: {total}</p>
      <p>
        Positive feedbacks: {`${positivePercentage}%`}
      </p>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
