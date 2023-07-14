import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Button = styled.button`
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px black solid;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
