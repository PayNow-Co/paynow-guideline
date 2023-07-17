import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd21'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '150'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '48d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3af'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '23a'),
    exact: true
  },
  {
    path: '/release-note',
    component: ComponentCreator('/release-note', 'cf7'),
    exact: true
  },
  {
    path: '/release-note/archive',
    component: ComponentCreator('/release-note/archive', '322'),
    exact: true
  },
  {
    path: '/release-note/tags',
    component: ComponentCreator('/release-note/tags', '363'),
    exact: true
  },
  {
    path: '/release-note/tags/feature',
    component: ComponentCreator('/release-note/tags/feature', 'de9'),
    exact: true
  },
  {
    path: '/release-note/tags/hotfix',
    component: ComponentCreator('/release-note/tags/hotfix', 'ced'),
    exact: true
  },
  {
    path: '/release-note/v1.0.0',
    component: ComponentCreator('/release-note/v1.0.0', '432'),
    exact: true
  },
  {
    path: '/release-note/v1.1.3',
    component: ComponentCreator('/release-note/v1.1.3', '414'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '025'),
    routes: [
      {
        path: '/api',
        component: ComponentCreator('/api', 'd7f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/add-a-new-pet-to-the-store',
        component: ComponentCreator('/api/add-a-new-pet-to-the-store', '41e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-user',
        component: ComponentCreator('/api/create-user', 'd9b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/creates-list-of-users-with-given-input-array',
        component: ComponentCreator('/api/creates-list-of-users-with-given-input-array', 'a3e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/creates-list-of-users-with-given-input-array-1',
        component: ComponentCreator('/api/creates-list-of-users-with-given-input-array-1', '4cc'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/delete-purchase-order-by-id',
        component: ComponentCreator('/api/delete-purchase-order-by-id', '38f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/delete-user',
        component: ComponentCreator('/api/delete-user', 'f49'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/deletes-a-pet',
        component: ComponentCreator('/api/deletes-a-pet', '175'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/find-pet-by-id',
        component: ComponentCreator('/api/find-pet-by-id', 'dde'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/find-purchase-order-by-id',
        component: ComponentCreator('/api/find-purchase-order-by-id', '751'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/finds-pets-by-status',
        component: ComponentCreator('/api/finds-pets-by-status', 'ef6'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/finds-pets-by-tags',
        component: ComponentCreator('/api/finds-pets-by-tags', 'b33'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-user-by-user-name',
        component: ComponentCreator('/api/get-user-by-user-name', '746'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/introduction',
        component: ComponentCreator('/api/introduction', 'b15'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/logs-out-current-logged-in-user-session',
        component: ComponentCreator('/api/logs-out-current-logged-in-user-session', '08d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/logs-user-into-the-system',
        component: ComponentCreator('/api/logs-user-into-the-system', '5c8'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/place-an-order-for-a-pet',
        component: ComponentCreator('/api/place-an-order-for-a-pet', 'a4d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/returns-pet-inventories-by-status',
        component: ComponentCreator('/api/returns-pet-inventories-by-status', '0c1'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/subscribe-to-the-store-events',
        component: ComponentCreator('/api/subscribe-to-the-store-events', 'dba'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-an-existing-pet',
        component: ComponentCreator('/api/update-an-existing-pet', 'c2a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/updated-user',
        component: ComponentCreator('/api/updated-user', '0d2'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/updates-a-pet-in-the-store-with-form-data',
        component: ComponentCreator('/api/updates-a-pet-in-the-store-with-form-data', '4bf'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/uploads-an-image',
        component: ComponentCreator('/api/uploads-an-image', '6ac'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/guide',
    component: ComponentCreator('/guide', '811'),
    routes: [
      {
        path: '/guide/intro',
        component: ComponentCreator('/guide/intro', 'b1a'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/guide/invoice',
        component: ComponentCreator('/guide/invoice', 'c05'),
        exact: true
      },
      {
        path: '/guide/logistics',
        component: ComponentCreator('/guide/logistics', '55f'),
        exact: true
      },
      {
        path: '/guide/payment',
        component: ComponentCreator('/guide/payment', '210'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/guide/payment-admin',
        component: ComponentCreator('/guide/payment-admin', 'c62'),
        exact: true
      }
    ]
  },
  {
    path: '/tutorial',
    component: ComponentCreator('/tutorial', '265'),
    routes: [
      {
        path: '/tutorial/01-intro',
        component: ComponentCreator('/tutorial/01-intro', '61a'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/intro',
        component: ComponentCreator('/tutorial/intro', 'a5f'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/logistics',
        component: ComponentCreator('/tutorial/logistics', 'd21'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/payment',
        component: ComponentCreator('/tutorial/payment', 'ee3'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/payment-admin',
        component: ComponentCreator('/tutorial/payment-admin', 'a4c'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/test-folder/',
        component: ComponentCreator('/tutorial/test-folder/', 'c1c'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/test-folder/intro',
        component: ComponentCreator('/tutorial/test-folder/intro', 'aae'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/tutorial/test-folder/test-folder-2/intro',
        component: ComponentCreator('/tutorial/test-folder/test-folder-2/intro', 'ea1'),
        exact: true,
        sidebar: "default"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fb8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
