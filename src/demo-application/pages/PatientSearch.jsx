import React from 'react';
import PropTypes from 'prop-types';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Button from 'terra-button';

import Page, {
  PageActions, Action, CardLayout, Card, PageActivityOverlay,
} from '@cerner/terra-application/lib/page';

import PagePresentingModal from '../modals/PagePresentingModal';
import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import ModalManagerIntegrationCard from './content/ModalManagerIntegrationCard';
import NavigationItemCard from './content/NavigationItemCard';
import ApplicationInfoCard from './content/ApplicationInfoCard';
import InputCard from './content/InputCard';
import DynamicHeadingCard from './content/DynamicHeadingCard';

import Page2 from './Page2';

const propTypes = {
  label: PropTypes.string,
  pageKey: PropTypes.string,
  onRequestClose: PropTypes.func,
};

// const page1MetaData = { data: 'page-1' };

const Page1 = ({ label, pageKey, onRequestClose }) => {
  const [showPage2, setShowPage2] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [metaData, setMetaData] = React.useState({ update_timestamp: Date.now() });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetaData({ update_timestamp: Date.now() });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const pageActions = (
    <PageActions>
      <Action
        actionKey="action-page-modal"
        label="Page Modal"
        icon={<IconTag />}
        onSelect={() => { setShowPageModal(true); }}
        isDisabled={isLoading}
      />
    </PageActions>
  );

  return (
    <Page
      pageKey={pageKey}
      label={label}
      metaData={metaData}
      actions={pageActions}
      onRequestClose={onRequestClose}
      activityOverlay={isLoading ? <PageActivityOverlay variant="loading" /> : undefined}
    >
      <CardLayout>
        <Card>
          <p>Page 1 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
      </CardLayout>
      {showPage2
        && <Page2 onRequestClose={() => { setShowPage2(false); }} />}
      {showPageModal
        && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </Page>
  );
};

Page1.propTypes = propTypes;

export default Page1;
