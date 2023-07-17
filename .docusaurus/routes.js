import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-TW/__docusaurus/debug',
    component: ComponentCreator('/zh-TW/__docusaurus/debug', '476'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/config',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/config', '8e8'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/content',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/content', 'e09'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/globalData', '1b8'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/metadata', '038'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/registry', 'ae1'),
    exact: true
  },
  {
    path: '/zh-TW/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-TW/__docusaurus/debug/routes', '2b7'),
    exact: true
  },
  {
    path: '/zh-TW/blog',
    component: ComponentCreator('/zh-TW/blog', 'd76'),
    exact: true
  },
  {
    path: '/zh-TW/blog/archive',
    component: ComponentCreator('/zh-TW/blog/archive', '4ba'),
    exact: true
  },
  {
    path: '/zh-TW/blog/first-blog-post',
    component: ComponentCreator('/zh-TW/blog/first-blog-post', '881'),
    exact: true
  },
  {
    path: '/zh-TW/blog/long-blog-post',
    component: ComponentCreator('/zh-TW/blog/long-blog-post', '4c7'),
    exact: true
  },
  {
    path: '/zh-TW/blog/mdx-blog-post',
    component: ComponentCreator('/zh-TW/blog/mdx-blog-post', '236'),
    exact: true
  },
  {
    path: '/zh-TW/blog/tags',
    component: ComponentCreator('/zh-TW/blog/tags', '324'),
    exact: true
  },
  {
    path: '/zh-TW/blog/tags/docusaurus',
    component: ComponentCreator('/zh-TW/blog/tags/docusaurus', '7ac'),
    exact: true
  },
  {
    path: '/zh-TW/blog/tags/facebook',
    component: ComponentCreator('/zh-TW/blog/tags/facebook', 'e5d'),
    exact: true
  },
  {
    path: '/zh-TW/blog/tags/hello',
    component: ComponentCreator('/zh-TW/blog/tags/hello', '5d5'),
    exact: true
  },
  {
    path: '/zh-TW/blog/tags/hola',
    component: ComponentCreator('/zh-TW/blog/tags/hola', '026'),
    exact: true
  },
  {
    path: '/zh-TW/blog/welcome',
    component: ComponentCreator('/zh-TW/blog/welcome', '759'),
    exact: true
  },
  {
    path: '/zh-TW/markdown-page',
    component: ComponentCreator('/zh-TW/markdown-page', '7c7'),
    exact: true
  },
  {
    path: '/zh-TW/release-note',
    component: ComponentCreator('/zh-TW/release-note', '9b7'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/archive',
    component: ComponentCreator('/zh-TW/release-note/archive', '2b8'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/tags',
    component: ComponentCreator('/zh-TW/release-note/tags', 'dcd'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/tags/feature',
    component: ComponentCreator('/zh-TW/release-note/tags/feature', 'f4f'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/tags/hotfix',
    component: ComponentCreator('/zh-TW/release-note/tags/hotfix', '0b1'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/v1.0.0',
    component: ComponentCreator('/zh-TW/release-note/v1.0.0', 'c18'),
    exact: true
  },
  {
    path: '/zh-TW/release-note/v1.1.3',
    component: ComponentCreator('/zh-TW/release-note/v1.1.3', 'dfb'),
    exact: true
  },
  {
    path: '/zh-TW/api',
    component: ComponentCreator('/zh-TW/api', '563'),
    routes: [
      {
        path: '/zh-TW/api',
        component: ComponentCreator('/zh-TW/api', '1ac'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/add-a-new-pet-to-the-store',
        component: ComponentCreator('/zh-TW/api/add-a-new-pet-to-the-store', 'd4d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/create-user',
        component: ComponentCreator('/zh-TW/api/create-user', '340'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/creates-list-of-users-with-given-input-array',
        component: ComponentCreator('/zh-TW/api/creates-list-of-users-with-given-input-array', '36e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/creates-list-of-users-with-given-input-array-1',
        component: ComponentCreator('/zh-TW/api/creates-list-of-users-with-given-input-array-1', '565'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/delete-purchase-order-by-id',
        component: ComponentCreator('/zh-TW/api/delete-purchase-order-by-id', '25a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/delete-user',
        component: ComponentCreator('/zh-TW/api/delete-user', '79e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/deletes-a-pet',
        component: ComponentCreator('/zh-TW/api/deletes-a-pet', '51b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/find-pet-by-id',
        component: ComponentCreator('/zh-TW/api/find-pet-by-id', '118'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/find-purchase-order-by-id',
        component: ComponentCreator('/zh-TW/api/find-purchase-order-by-id', 'b61'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/finds-pets-by-status',
        component: ComponentCreator('/zh-TW/api/finds-pets-by-status', '584'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/finds-pets-by-tags',
        component: ComponentCreator('/zh-TW/api/finds-pets-by-tags', '9e4'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/get-user-by-user-name',
        component: ComponentCreator('/zh-TW/api/get-user-by-user-name', 'ebe'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/introduction',
        component: ComponentCreator('/zh-TW/api/introduction', 'e45'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/logs-out-current-logged-in-user-session',
        component: ComponentCreator('/zh-TW/api/logs-out-current-logged-in-user-session', 'af2'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/logs-user-into-the-system',
        component: ComponentCreator('/zh-TW/api/logs-user-into-the-system', '209'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/place-an-order-for-a-pet',
        component: ComponentCreator('/zh-TW/api/place-an-order-for-a-pet', '2e3'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/returns-pet-inventories-by-status',
        component: ComponentCreator('/zh-TW/api/returns-pet-inventories-by-status', 'cc0'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/subscribe-to-the-store-events',
        component: ComponentCreator('/zh-TW/api/subscribe-to-the-store-events', '85d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/update-an-existing-pet',
        component: ComponentCreator('/zh-TW/api/update-an-existing-pet', 'e15'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/updated-user',
        component: ComponentCreator('/zh-TW/api/updated-user', '68d'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/updates-a-pet-in-the-store-with-form-data',
        component: ComponentCreator('/zh-TW/api/updates-a-pet-in-the-store-with-form-data', '78b'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/zh-TW/api/uploads-an-image',
        component: ComponentCreator('/zh-TW/api/uploads-an-image', 'ff6'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/zh-TW/guide',
    component: ComponentCreator('/zh-TW/guide', 'd14'),
    routes: [
      {
        path: '/zh-TW/guide/intro',
        component: ComponentCreator('/zh-TW/guide/intro', 'e66'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/guide/invoice',
        component: ComponentCreator('/zh-TW/guide/invoice', '81a'),
        exact: true
      },
      {
        path: '/zh-TW/guide/logistics',
        component: ComponentCreator('/zh-TW/guide/logistics', 'f92'),
        exact: true
      },
      {
        path: '/zh-TW/guide/payment',
        component: ComponentCreator('/zh-TW/guide/payment', '4fc'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/guide/payment-admin',
        component: ComponentCreator('/zh-TW/guide/payment-admin', '8e5'),
        exact: true
      }
    ]
  },
  {
    path: '/zh-TW/tutorial',
    component: ComponentCreator('/zh-TW/tutorial', 'bed'),
    routes: [
      {
        path: '/zh-TW/tutorial/01-intro',
        component: ComponentCreator('/zh-TW/tutorial/01-intro', '090'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/intro',
        component: ComponentCreator('/zh-TW/tutorial/intro', '517'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/logistics',
        component: ComponentCreator('/zh-TW/tutorial/logistics', '80d'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/payment',
        component: ComponentCreator('/zh-TW/tutorial/payment', '29e'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/payment-admin',
        component: ComponentCreator('/zh-TW/tutorial/payment-admin', 'cf7'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/test-folder/',
        component: ComponentCreator('/zh-TW/tutorial/test-folder/', 'd5a'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/test-folder/intro',
        component: ComponentCreator('/zh-TW/tutorial/test-folder/intro', 'c59'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/test-folder/test-folder-2/',
        component: ComponentCreator('/zh-TW/tutorial/test-folder/test-folder-2/', 'd6d'),
        exact: true,
        sidebar: "default"
      },
      {
        path: '/zh-TW/tutorial/test-folder/test-folder-2/intro',
        component: ComponentCreator('/zh-TW/tutorial/test-folder/test-folder-2/intro', 'e1b'),
        exact: true,
        sidebar: "default"
      }
    ]
  },
  {
    path: '/zh-TW/',
    component: ComponentCreator('/zh-TW/', 'fa2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
