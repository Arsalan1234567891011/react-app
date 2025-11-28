import React, { Component } from 'react';
import { Button, Flex, Splitter, Typography } from 'antd';

// Small component
export const Desc = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);

// Splitter Demo Component
export const DemoSplitter = () => (
  <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(3, 12, 2, 0.1)' }}>
    <Splitter.Panel defaultSize="40%" min="20%" max="70%">
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
);

export class Contactus extends Component {
  render() {
    return (
      <>
        <Flex gap="small" wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
        <br/>
        <DemoSplitter />
      </>
    );
  }
}

export default Contactus;



