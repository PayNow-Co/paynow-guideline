import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd66'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '308'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e92'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '49e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '18b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '955'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '24f'),
    exact: true
  },
  {
    path: '/release-note',
    component: ComponentCreator('/release-note', '4fc'),
    exact: true
  },
  {
    path: '/release-note/archive',
    component: ComponentCreator('/release-note/archive', '467'),
    exact: true
  },
  {
    path: '/release-note/tags',
    component: ComponentCreator('/release-note/tags', '5c7'),
    exact: true
  },
  {
    path: '/release-note/tags/feature',
    component: ComponentCreator('/release-note/tags/feature', 'f3a'),
    exact: true
  },
  {
    path: '/release-note/tags/hotfix',
    component: ComponentCreator('/release-note/tags/hotfix', '508'),
    exact: true
  },
  {
    path: '/release-note/v1.0.0',
    component: ComponentCreator('/release-note/v1.0.0', '794'),
    exact: true
  },
  {
    path: '/release-note/v1.1.3',
    component: ComponentCreator('/release-note/v1.1.3', '1c6'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '62f'),
    routes: [
      {
        path: '/api',
        component: ComponentCreator('/api', '223'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/add-a-new-pet-to-the-store',
        component: ComponentCreator('/api/add-a-new-pet-to-the-store', '3ed'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-user',
        component: ComponentCreator('/api/create-user', '14f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/creates-list-of-users-with-given-input-array',
        component: ComponentCreator('/api/creates-list-of-users-with-given-input-array', '349'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/creates-list-of-users-with-given-input-array-1',
        component: ComponentCreator('/api/creates-list-of-users-with-given-input-array-1', 'c10'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/delete-purchase-order-by-id',
        component: ComponentCreator('/api/delete-purchase-order-by-id', '1d8'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/delete-user',
        component: ComponentCreator('/api/delete-user', 'da1'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/deletes-a-pet',
        component: ComponentCreator('/api/deletes-a-pet', '46c'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/find-pet-by-id',
        component: ComponentCreator('/api/find-pet-by-id', '61e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/find-purchase-order-by-id',
        component: ComponentCreator('/api/find-purchase-order-by-id', '0df'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/finds-pets-by-status',
        component: ComponentCreator('/api/finds-pets-by-status', '688'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/finds-pets-by-tags',
        component: ComponentCreator('/api/finds-pets-by-tags', '633'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-user-by-user-name',
        component: ComponentCreator('/api/get-user-by-user-name', 'd1a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/introduction',
        component: ComponentCreator('/api/introduction', 'd08'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/logs-out-current-logged-in-user-session',
        component: ComponentCreator('/api/logs-out-current-logged-in-user-session', 'd41'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/logs-user-into-the-system',
        component: ComponentCreator('/api/logs-user-into-the-system', '24c'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/place-an-order-for-a-pet',
        component: ComponentCreator('/api/place-an-order-for-a-pet', '26c'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/returns-pet-inventories-by-status',
        component: ComponentCreator('/api/returns-pet-inventories-by-status', 'b1f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/subscribe-to-the-store-events',
        component: ComponentCreator('/api/subscribe-to-the-store-events', '0a0'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-an-existing-pet',
        component: ComponentCreator('/api/update-an-existing-pet', '396'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/updated-user',
        component: ComponentCreator('/api/updated-user', 'e78'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/updates-a-pet-in-the-store-with-form-data',
        component: ComponentCreator('/api/updates-a-pet-in-the-store-with-form-data', 'b95'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/uploads-an-image',
        component: ComponentCreator('/api/uploads-an-image', '973'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fcb'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '50d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/api-reference/',
        component: ComponentCreator('/docs/api-reference/', 'af7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/invoice-admin/',
        component: ComponentCreator('/docs/invoice-admin/', '07a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/invoice-admin/generation',
        component: ComponentCreator('/docs/invoice-admin/generation', '43b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/invoice-admin/inquiry',
        component: ComponentCreator('/docs/invoice-admin/inquiry', '7e8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/invoice-admin/operation',
        component: ComponentCreator('/docs/invoice-admin/operation', 'fdc'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/logistics-admin/',
        component: ComponentCreator('/docs/logistics-admin/', '383'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/logistics-admin/print-tag',
        component: ComponentCreator('/docs/logistics-admin/print-tag', 'e41'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/logistics-admin/store-management',
        component: ComponentCreator('/docs/logistics-admin/store-management', 'a6c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-admin/',
        component: ComponentCreator('/docs/payment-admin/', '783'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-admin/configuration',
        component: ComponentCreator('/docs/payment-admin/configuration', 'a57'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-admin/finance',
        component: ComponentCreator('/docs/payment-admin/finance', '1f8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-admin/refund',
        component: ComponentCreator('/docs/payment-admin/refund', '41d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-admin/seller',
        component: ComponentCreator('/docs/payment-admin/seller', '975'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/',
        component: ComponentCreator('/docs/payment-service/', '74e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/mobile-payment/',
        component: ComponentCreator('/docs/payment-service/mobile-payment/', '2d5'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/mobile-payment/apple-pay',
        component: ComponentCreator('/docs/payment-service/mobile-payment/apple-pay', '4de'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/mobile-payment/icash-pay',
        component: ComponentCreator('/docs/payment-service/mobile-payment/icash-pay', '887'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/online-payment/',
        component: ComponentCreator('/docs/payment-service/online-payment/', 'ff2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/online-payment/eticket',
        component: ComponentCreator('/docs/payment-service/online-payment/eticket', '6d9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/online-payment/landing-page',
        component: ComponentCreator('/docs/payment-service/online-payment/landing-page', '7d8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/online-payment/mpos',
        component: ComponentCreator('/docs/payment-service/online-payment/mpos', 'e00'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/payment-service/online-payment/shopify',
        component: ComponentCreator('/docs/payment-service/online-payment/shopify', 'bf0'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1ee'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
