import React from 'react';
import { PostAdd } from '@material-ui/icons';
import IntlMessages from '../../../utils/IntlMessages';

import {
  FaFlipboard,
  FaDocker,
  FaCodepen,
  FaTh,
  FaSignOutAlt,
  FaSitemap,
  FaUsers,
  FaUserAlt

} from "react-icons/fa";


export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'section',
    children: [
      
      {
        name: <IntlMessages id={'Loadings'} />,
        icon: <FaTh />,
        type: 'item',
        link: '/dashboard/crypto',
      },
      {
        name: <IntlMessages id={'SKU Types'} />,
        icon: <FaFlipboard />,
        type: 'item',
        link: '/dashboard/listing',
      },
      {
        name: <IntlMessages id={'Pallets'} />,
        icon: <FaDocker />,
        type: 'item',
        link: '/dashboard/crm',
      },
      {
        name: <IntlMessages id={'Containers'} />,
        icon: <FaCodepen />,
        type: 'item',
        link: '/dashboard/intranet',
      },
      {
        name: <IntlMessages id={'Users'} />,
        icon: <FaUserAlt />,
        type: 'item',
        link: '/dashboard/eCommerce',
      },
      {
        name: <IntlMessages id={'Project'} />,
        icon: <FaSitemap />,
        type: 'item',
        link: '/dashboard/news',
      },
      {
        name: <IntlMessages id={'Profile'} />,
        icon: <FaUsers />,
        type: 'item',
        link: '/dashboard/misc',
      },
      {
        name: <IntlMessages id={'Logout'} />,
        icon: <FaSignOutAlt />,
        type: 'item',
        link: '/dashboard/misc',
      },  

    ],
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'pages.samplePage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/sample-page',
      },
    ],
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      {
        name: <IntlMessages id={'pages.samplePage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/sample-page',
      },
    ],
  },
];
