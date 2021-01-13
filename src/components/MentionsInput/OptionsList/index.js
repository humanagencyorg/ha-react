import React from 'react';
import PropTypes from 'prop-types';
import { Container, InnerWrapper, EmptyResultsText } from './style';
import { makeStyles } from '@material-ui/core/styles';
import { usePreparedList } from './usePreparedList';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import _isEmpty from 'lodash/isEmpty';
import { Search } from 'react-feather';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 517,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    margin: '0 auto',
    paddingTop: 0,
    maxHeight: 331,
    border: '1px solid #E0E0E0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    ['@media (max-width: 599px)']: {
      maxWidth: '100%',
    },
  },
  subheader: {
    minHeight: 17,
    color: '#bdbdbd',
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 0.8,
    lineHeight: 1.2,
    textTransform: 'uppercase',
    marginBottom: 0,
    paddingTop: 7,
    paddingBottom: 7,
  },
  listItem: {
    color: '#333',
    borderTop: '1px solid #e0e0e0',
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: 'rgba(102, 174, 249, 0.2)',
    },
    '&:hover': {
      backgroundColor: 'rgba(102, 174, 249, 0.2)',
    },
  },
  centered: {
    justifyContent: 'center',
  },
  loader: {
    color: '#e0e0e0',
  },
}));

function OptionsList({
  steps,
  handleLastSelect,
  currentItemIndex,
  listRef,
  currentItemRef,
  setCurrentItemIndex,
}) {
  const classes = useStyles();
  const { preparedList, onSelect, header, isLoaded } = usePreparedList(
    handleLastSelect,
    steps,
  );

  const onHover = (index) => {
    setCurrentItemIndex(index);
  };

  return (
    <Container data-testid="MentionsInput/OptionsList">
      <List className={classes.root} ref={listRef}>
        <ListSubheader className={classes.subheader}>{header}</ListSubheader>
        {isLoaded ? (
          <>
            {_isEmpty(preparedList) ? (
              <InnerWrapper>
                <Search />
                <EmptyResultsText>
                  Couldn't find any matching results.
                </EmptyResultsText>
              </InnerWrapper>
            ) : (
              <>
                {preparedList.map((item, index) => {
                  const itemIsSelected = currentItemIndex === index;
                  return (
                    <ListItem
                      className={classes.listItem}
                      ref={itemIsSelected ? currentItemRef : null}
                      selected={itemIsSelected}
                      button
                      key={item.value}
                      onClick={() => onSelect(item.value)}
                      onMouseEnter={() => onHover(index)}
                      data-testid="OptionsList/ListItem"
                      disableRipple
                    >
                      <ListItemText
                        primary={item.title}
                        secondary={item.subTitle}
                      />
                    </ListItem>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <ListItem className={(classes.listItem, classes.centered)}>
            <CircularProgress className={classes.loader} />
          </ListItem>
        )}
      </List>
    </Container>
  );
}

OptionsList.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
      referencePrefix: PropTypes.string,
      loadList: PropTypes.func,
    }),
  ).isRequired,
  handleLastSelect: PropTypes.func.isRequired,
  setCurrentItemIndex: PropTypes.func.isRequired,
  currentItemIndex: PropTypes.number.isRequired,
  listRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  currentItemRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};

export default OptionsList;
