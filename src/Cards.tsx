import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const Cards: React.FC = () => (
  <Card
    hoverable
    cover={<img alt="example" src="https://tech.phonepe.com/static/b442b692f7f2c30f014b6d2120769ca7/bc8e0/Liquid-UI-SDUI-Framework.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
