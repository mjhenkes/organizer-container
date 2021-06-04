import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list/lib/index';
import Hyperlink from 'terra-hyperlink';

import {
  useHistory,
} from 'react-router-dom';

import Page, {
  CardLayout, Card,
} from '@cerner/terra-application/lib/page';

import PendingActionsCard from './content/PendingActionsCard';

// const chartURL = 'http://localhost:8080/';
// this only works with current hash routing pattern.
const chartURL = `${window.location.pathname}#/chart`;
// const chartURL = '/#/chart';
// const chartURL = '/mega-app-2/#/chart';
const localChartURL = '/chart';

const propTypes = {
  label: PropTypes.string,
  pageKey: PropTypes.string,
  onRequestClose: PropTypes.func,
};

const PatientList = ({ label, pageKey, onRequestClose }) => {
  const history = useHistory();

  const getPatients = () => {
    const patients = [];
    for (let index = 0; index < 10; index += 1) {
      patients.push((
        <Item key={index}>
          {/* <Hyperlink
            href={`${chartURL}?${index}`}
            style={{ padding: '.5rem' }}
          >
            {`Patient ${index}`}
          </Hyperlink> */}
          <Hyperlink
            href={`${chartURL}?${index}`}
            style={{ padding: '.5rem' }}
            onClick={(event) => {
              event.preventDefault();
              history.push(`${localChartURL}?${index}`);
              return false;
            }}
          >
            {`Patient ${index}`}
          </Hyperlink>
          <Hyperlink
            href={`${chartURL}?${index}`}
            variant="external"
            target="_blank"
            style={{ padding: '.5rem' }}
          />

          {/* </Hyperlink> */}
          {/* <Hyperlink
            href={`${chartURL}?${index}`}
            variant="external"
            target={`Patient ${index}`}
            rel="opener"
            style={{ padding: '.5rem' }}
          >
            New Tab unique target
          </Hyperlink>
          <Hyperlink
            href={`${chartURL}?${index}`}
            variant="external"
            target="chart"
            rel="opener"
            style={{ padding: '.5rem' }}
          >
            New Tab same target
          </Hyperlink> */}
        </Item>
      ));
    }
    return patients;
  };

  return (
    <Page
      pageKey={pageKey}
      label={label}
      onRequestClose={onRequestClose}
    >
      <CardLayout>
        {/* <Card label="A Local Section">
          <div> Hi  Matt Stuff from actual local. With sweet ux changes!</div>
        </Card> */}
        <Card label="May 1st">
          <List dividerStyle="bottom-only">
            { getPatients() }
          </List>
        </Card>
        <PendingActionsCard />
      </CardLayout>
    </Page>
  );
};

PatientList.propTypes = propTypes;

export default PatientList;
