import PropTypes from "prop-types";

import {
  ListWrapper,
  ListHeader,
  ListTitle,
  ListClearButton,
  UnroderedList,
  ListItem,
  ListDoneTaskButton,
  ListEmptyMessage,
} from "./styles";

export const List = ({
  list,
  isDisabled,
  handleDeleteItem,
  handleOpenModal,
}) => {
  return (
    <ListWrapper>
      <ListHeader>
        <ListTitle>my todos</ListTitle>
        <ListClearButton onClick={handleOpenModal} disabled={isDisabled}>
          clear
        </ListClearButton>
      </ListHeader>

      <UnroderedList>
        {list.length > 0 ? (
          list.map((item, i) => (
            <ListItem key={i}>
              {item.task}{" "}
              <ListDoneTaskButton onClick={() => handleDeleteItem(item.id)}>
                done
              </ListDoneTaskButton>
            </ListItem>
          ))
        ) : (
          <ListEmptyMessage>your list is empty</ListEmptyMessage>
        )}
      </UnroderedList>
    </ListWrapper>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};
