import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { toastSuccess, toastError, toastClearedList } from "../../utils/toasts";

import { Input } from "../../components/input";
import { List } from "../../components/list";
import { ClearListModal } from "../../components/clear-list-modal";

export const ContainerToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("list")) || []
  );

  // controls clear button
  const [isDisabled, setIsDisabled] = useState(true);

  // controls modal
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    if (list.length <= 0) {
      handleDisableClearButton();
    } else {
      handleEnableClearButton();
    }
  }, [list]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleKeyDown = (e, task) => {
    if (e.key === "Enter") {
      if (list.length >= 5) {
        toastError("too many tasks");

        return;
      }

      if (task.length <= 0) {
        toastError("write something to add");

        return;
      }

      setList([{ id: uuidv4(), task }, ...list]);
    }
  };

  const handleAddButton = (task) => {
    if (list.length >= 5) {
      toastError("too many tasks");

      return;
    }

    if (task.length <= 0) {
      toastError("write something to add");

      return;
    }

    setList([{ id: uuidv4(), task }, ...list]);
  };

  const handleClearList = () => {
    if (list.length <= 0) {
      return;
    }

    setList([]);
    setIsOpen(false);

    toastClearedList("all clear");
  };

  const handleDeleteItem = (id) => {
    setList(
      list.filter((item) => {
        return item.id !== id;
      })
    );

    toastSuccess("kudos 🎉");
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEnableClearButton = () => {
    setIsDisabled(false);
  };

  const handleDisableClearButton = () => {
    setIsDisabled(true);
  };

  return (
    <>
      <Input
        task={task}
        handleInput={handleInput}
        handleAddButton={handleAddButton}
        handleKeyDown={handleKeyDown}
      />
      <List
        list={list}
        handleClearList={handleClearList}
        handleDeleteItem={handleDeleteItem}
        isDisabled={isDisabled}
        handleOpenModal={handleOpenModal}
      />
      {isOpen && (
        <ClearListModal
          handleClearList={handleClearList}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
