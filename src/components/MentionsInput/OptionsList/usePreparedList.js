import { useState, useEffect } from 'react';

const sortExperiencesList = (list, experienceId) => {
  list.some((item, index) => {
    if (item.value === experienceId) {
      item.subTitle = 'This Experience';
      list.splice(index, 1);
      list.unshift(item);
      return true;
    }
  });

  return list;
};

export const usePreparedList = (onComplete, steps, experienceId) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [header, setHeader] = useState('');

  useEffect(() => {
    setHeader(steps[stepIndex].title);

    steps[stepIndex].loadList().then((data) => {
      const sortedList = sortExperiencesList(data, experienceId);

      setCurrentList(sortedList);
      setIsLoaded(true);
    });
  }, []);

  const onSelect = (value) => {
    const items = [...selectedItems, value];
    const nextStep = steps[stepIndex + 1];
    setSelectedItems(items);
    setIsLoaded(false);

    if (nextStep) {
      setHeader(`${header} / ${nextStep.title}`);

      nextStep.loadList(value).then((data) => {
        setCurrentList(data);
        setStepIndex(stepIndex + 1);
        setIsLoaded(true);
      });
    } else {
      onComplete(items);
    }
  };

  return {
    preparedList: currentList,
    onSelect,
    header,
    isLoaded,
  };
};
