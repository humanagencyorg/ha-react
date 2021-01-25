import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledTextarea as Textarea, ClearIcon, SearchIcon } from './style';
import { OptionsList } from './OptionsList';
import { Input } from '../Input';

export const MentionsInput = ({
  name,
  defaultValue,
  placeholder,
  textarea,
  onValueChange,
  steps,
  readOnly,
  experienceId,
  error,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [mentionSymbolPosition, setMentionSymbolPosition] = useState(0);
  const inputRef = useRef(null);
  const currentItemRef = useRef(null);
  const listRef = useRef(null);

  const handleInputChange = (e) => {
    const { value, selectionStart } = e.target;

    setInputValue(value);

    if (value[selectionStart - 1] === '[') {
      setCurrentItemIndex(0);
      setDropdownIsOpen(true);
      setMentionSymbolPosition(selectionStart - 1);
    } else {
      setDropdownIsOpen(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (listRef.current) {
      if (listRef.current.contains(e.target)) {
        return;
      }
    }

    setDropdownIsOpen(false);
  };

  const onClick = () => {
    setDropdownIsOpen(true);
    setCurrentItemIndex(0);
  };

  useEffect(() => {
    if (dropdownIsOpen) {
      window.addEventListener('mousedown', handleOutsideClick, false);
    }

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick, false);
    };
  }, [dropdownIsOpen]);

  const handleKeyDown = (e) => {
    if (dropdownIsOpen) {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          setCurrentItemIndex(0);
          if (currentItemRef.current && listRef.current) {
            currentItemRef.current.click();
            listRef.current.children[1].scrollIntoView(false);
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (listRef.current) {
            if (currentItemIndex === 0) {
              setCurrentItemIndex(listRef.current.children.length - 2);
              listRef.current.children[
                listRef.current.children.length - 1
              ].scrollIntoView(false);
            } else {
              setCurrentItemIndex(currentItemIndex - 1);
              currentItemRef.current.scrollIntoView(false);
            }
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (listRef.current) {
            if (currentItemIndex === listRef.current.children.length - 2) {
              setCurrentItemIndex(0);
              listRef.current.children[1].scrollIntoView(false);
            } else {
              setCurrentItemIndex(currentItemIndex + 1);
              listRef.current.children[currentItemIndex + 2].scrollIntoView(
                false,
              );
            }
          }
          break;
        default:
          return;
      }
    }
  };

  const handleLastSelect = (items) => {
    const referenceKeys = items
      .map((item, index) => {
        const currentStep = steps[index];
        return currentStep.skipFieldRender
          ? ''
          : `${currentStep.referencePrefix}${item}`;
      })
      .filter((item) => item.length);
    const reference = `{{${referenceKeys.join('.')}}} `;

    if (readOnly) {
      const value = reference.trim();

      if (onValueChange) {
        onValueChange(value);
      }

      setInputValue(value);
    } else {
      setInputValue(
        inputValue.slice(0, mentionSymbolPosition) +
          reference +
          inputValue.slice(mentionSymbolPosition + 1),
      );
    }

    setDropdownIsOpen(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = () => {
    if (onValueChange) {
      onValueChange('');
    }

    setInputValue('');
  };

  const inputProps = {
    name,
    placeholder,
    error,
    noMargin: true,
    value: inputValue,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    ref: inputRef,
  };

  if (readOnly) {
    inputProps.onClick = onClick;
    inputProps.readOnly = true;
    inputProps.autocomplete = 'off';
    inputProps.style = { cursor: 'pointer' };
  }

  const renderReadonlyInput = () => {
    return (
      <div style={{ position: 'relative' }}>
        <Input {...inputProps} />
        {inputValue ? (
          <ClearIcon
            size={20}
            onClick={handleClearInput}
            data-testid="MentionsInput/ClearIcon"
          />
        ) : (
          <SearchIcon size={20} onClick={onClick} />
        )}
      </div>
    );
  };

  return (
    <>
      {textarea ? <Textarea {...inputProps} /> : renderReadonlyInput()}
      {dropdownIsOpen && (
        <OptionsList
          steps={steps}
          handleLastSelect={handleLastSelect}
          currentItemIndex={currentItemIndex}
          inputWidth={inputRef.current ? inputRef.current.clientWidth : 517}
          listRef={listRef}
          currentItemRef={currentItemRef}
          setCurrentItemIndex={setCurrentItemIndex}
          experienceId={experienceId}
        />
      )}
    </>
  );
};

MentionsInput.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onValueChange: PropTypes.func,
  error: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      referencePrefix: PropTypes.string,
      loadList: PropTypes.func,
    }),
  ).isRequired,
  experienceId: PropTypes.number,
  textarea: PropTypes.bool,
  readOnly: PropTypes.bool,
};
