import { EditFilled } from "@ant-design/icons";
import { Avatar, Button, Col, Flex, Input, Row, Typography } from "antd";
import { QuickAccessItems } from "./utils";
import { DashboardCollection } from "./DashboardCollection";

export const QuickAccess = () => {
  const { Title } = Typography;
  return (
    <>
      <Row gutter={10}>
        <Col className="gutter-row" span={8}>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "0px 10px",
            }}
          >
            <Flex style={{ padding:'15px' }} justify="space-between">
              <Title level={4} children="Quick Access" />
              <EditFilled
                size={15}
                style={{ color: "#228be6", fontSize: "20px" }}
              />
            </Flex>
            <Row>
              {QuickAccessItems.map((i) => (
                <Col span={8}>
                  <Flex
                    gap="middle"
                    vertical
                    align="center"
                    justify="center"
                    key={i.id}
                  >
                    <Avatar
                      size={48}
                      style={{
                        backgroundColor: "#947208",
                        color: "#fff",
                        padding: "5px",
                      }}
                      icon={i.icon}
                    />
                    <Title level={5} children={i.label} />
                  </Flex>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
          className="gutter-row"
          span={16}
        >
          <div
            style={{
              margin: "10px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <Flex align="center" justify="space-between">
              <Title
                style={{ marginBottom: "0px" }}
                level={4}
                children="Dashboard Collection"
              />
              <Flex gap="small">
                <Input
                  style={{ height: "40px" }}
                  placeholder="Search & Enter"
                />
                <Button size="large" type="primary" children="Add Dashboard" />
              </Flex>
            </Flex>
            <DashboardCollection />
          </div>
        </Col>
      </Row>
    </>
  );
};
