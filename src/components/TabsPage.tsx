import { NavLink, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
import { TabContext } from '../store/TabsContext';

const TabsPage = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({
                  'is-active': tab.id === tabId,
                })}
              >
                <NavLink to={tab.id}>{tab.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TabsPage;
