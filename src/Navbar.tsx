import React, { useState } from "react";
import { Avatar, Divider, Flex, Image, Popover, Typography } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { menuItems } from "./utils";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const { Text, Paragraph } = Typography;

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleAvatarChange = (newOpen: boolean) => {
    setAvatarOpen(newOpen);
  };

  return (
    <>
      <Flex
        style={{
          backgroundColor: "#ffffff",
          color: "#000",
          padding: "5px 10px",
        }}
        justify="space-between"
        align="center"
      >
        <Image
          width={40}
          src="https://img.freepik.com/premium-vector/cloud-logo-design-concept-vector-art-illustration_761413-40842.jpg?semt=ais_hybrid"
        />
        <Flex gap="small">
          <Popover
            arrow={false}
            placement="bottomRight"
            content={menuItems.map((i) => (
              <Flex style={{ height: "100%" }} align="center" gap="small">
                <Avatar
                  style={{ backgroundColor: "transparent", color: "#000" }}
                  size={30}
                >
                  {i.icon}
                </Avatar>
                <Paragraph style={{ marginTop: "8px" }}>{i.label}</Paragraph>
              </Flex>
            ))}
            title="Application"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <AppstoreOutlined style={{ fontSize: "30px" }} />
          </Popover>
          <Popover
            placement="bottomRight"
            content={
              <Flex vertical>
                <Flex gap="small">
                  <Avatar
                    size="large"
                    shape="square"
                    style={{
                      backgroundColor: "#27a8e0",
                      color: "#fff",
                      padding: "5px",
                    }}
                    children="SN"
                  />
                  <Flex gap="large" justify="space-between">
                    <Flex vertical>
                      <Text
                        strong
                        style={{ marginBottom: "0px" }}
                        children="Shane"
                      />
                      <Text
                        type="secondary"
                        style={{ marginBottom: "0px" }}
                        children="Admin"
                      />
                    </Flex>
                    <LogoutOutlined />
                  </Flex>
                </Flex>
                <Divider style={{ margin: "0px" }} />
                <Text style={{ margin: "10px" }} children="Choose Theme" />
                <Flex style={{ margin: "5px" }} justify="space-between">
                  <Flex gap="small">
                    <Avatar
                      style={{
                        backgroundColor: "#fff",
                        border: "2px solid #32ace2",
                      }}
                      shape="square"
                      size="small"
                    />
                    <Avatar
                      style={{
                        backgroundColor: "#909090",
                      }}
                      shape="square"
                      size="small"
                    />
                    <Avatar
                      style={{
                        backgroundColor: "#32ace2",
                      }}
                      shape="square"
                      size="small"
                    />
                  </Flex>
                  <SettingFilled style={{ fontSize: "20px" }} />
                </Flex>
              </Flex>
            }
            trigger="click"
            open={avatarOpen}
            onOpenChange={handleAvatarChange}
          >
            <Avatar
              shape="square"
              style={{
                backgroundColor: "#27a8e0",
                color: "#fff",
                padding: "5px",
                cursor: "pointer",
              }}
              children="SN"
            />
          </Popover>
        </Flex>
      </Flex>
      <Divider style={{ margin: "0px" }} />
    </>
  );
};
