import React, { FC } from 'react'
import Layout from '../components/Layout';
import { AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark
};

const IndexPage: FC<Props> = () => (
  <Layout activePath={location.pathname}>
    当サイトは、サイト管理者が日常で得たIT知識を備忘録も兼ねてまとめたサイトです。
  </Layout>
);

export default IndexPage;
