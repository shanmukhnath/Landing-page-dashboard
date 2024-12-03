import React from "react";
import { Flex, Typography } from "antd";
import { Navbar } from "./Navbar";
import { Carousels } from "./Carousels";
import { QuickAccess } from "./QuickAccess";

const App: React.FC = () => {
  const { Title } = Typography;

  return (
    <div>
      <Navbar />
      <Flex
        style={{
          margin: "10px",
        }}
        vertical
        gap="middle"
      >
        <div
          style={{
            backgroundColor: "#27a8e0",
            height: "150px",
            padding: "10px",
          }}
        >
          <Flex vertical justify="center">
            <Title
              style={{ margin: "0px", color: "#fff" }}
              children="Quick Tour: Welcome to CloneX!"
            />
            <Title
              level={5}
              style={{ margin: "0px", color: "#fff" }}
              children="We’re excited to have you here. Check out the quick startVideo here"
            />
          </Flex>
        </div>
        <Carousels />
        <QuickAccess />
      </Flex>
    </div>
  );
};

export default App;
