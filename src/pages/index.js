import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const to = useBaseUrl('/docs/')
  return <Redirect to={to} />;
}
