import React from "react";
import { Badge, Flex, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import { DashboardCollectionItems } from "./utils";
import { UserOutlined } from "@ant-design/icons";

const onChange = (key: string) => {
  console.log(key);
};

export const Details = () => {
  const { Title, Text } = Typography;
  return (
    <div
      style={{
        overflowY: "scroll",
        maxHeight: "200px",
      }}
    >
      {DashboardCollectionItems.map((i) => (
        <Flex
          style={{
            backgroundColor: "#f8f9fa",
            marginTop: "5px",
            borderRadius: "10px",
            padding: "0px 10px",
          }}
          gap="small"
          justify="space-between"
          align="center"
        >
          <Title style={{ marginBottom: "0px" }} level={5} children={i.label} />
          <div>
            <Flex justify="center" gap="small">
              <UserOutlined />
              <Text
                color="#fff"
                style={{ marginBottom: "0px" }}
                children={i.author}
              />
            </Flex>
            <Text
              type="secondary"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "0px",
                alignItems: "center",
                fontSize: "10px",
              }}
              children={i.created}
            />
          </div>
        </Flex>
      ))}
    </div>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "My Dashboards",
    children: "No Records",
    icon: <Badge count="0" showZero color="#228be6" />,
  },
  {
    key: "2",
    label: "Shared with me",
    children: <Details />,
    icon: <Badge count="8" color="#228be6" />,
  },
];

export const DashboardCollection: React.FC = () => (
  <Tabs defaultActiveKey="2" items={items} onChange={onChange} />
);
