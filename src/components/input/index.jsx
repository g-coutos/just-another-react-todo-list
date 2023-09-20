import PropTypes from "prop-types";

import {
  InputWrapper,
  InputLabel,
  InputFieldFlex,
  InputField,
  InputFieldButton,
} from "./styles";

export const Input = ({
  task,
  handleInput,
  handleAddButton,
  handleKeyDown,
}) => {
  return (
    <InputWrapper>
      <InputLabel>add your task</InputLabel>
      <InputFieldFlex>
        <InputField
          type="text"
          max="72"
          placeholder="invest $10 bucks"
          value={task}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e, task)}
        />
        <InputFieldButton onClick={() => handleAddButton(task)}>
          add
        </InputFieldButton>
      </InputFieldFlex>
    </InputWrapper>
  );
};

Input.propTypes = {
  task: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleAddButton: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};
