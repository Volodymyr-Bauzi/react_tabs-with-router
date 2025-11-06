import { useParams } from 'react-router-dom';
import { TabContext } from '../store/TabsContext';
import { useContext } from 'react';
import PleaseSelectTab from './PleaseSelectTab';

const TabItemPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabContext);
  const selectedTab = tabs.find(tab => tab.id === tabId);

  if (!selectedTab) {
    return <PleaseSelectTab />;
  }

  return <p>{selectedTab.content}</p>;
};

export default TabItemPage;
