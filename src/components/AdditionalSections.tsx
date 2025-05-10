import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export const CaseStudiesSection: React.FC = () => (
  <section style={{ marginBottom: 50 }}>
    <Title level={2}>Case Studies</Title>
    <Row gutter={[16, 16]}>
      <Col md={8} sm={24}>
        <Card title="Property Dispute">
          <Paragraph>
            Successfully resolved a complex property inheritance case involving multiple stakeholders.
          </Paragraph>
        </Card>
      </Col>
      <Col md={8} sm={24}>
        <Card title="Contract Breach">
          <Paragraph>
            Represented a small business in a contract breach and won full compensation.
          </Paragraph>
        </Card>
      </Col>
      <Col md={8} sm={24}>
        <Card title="Family Settlement">
          <Paragraph>
            Mediated a sensitive family settlement leading to a fair and amicable agreement.
          </Paragraph>
        </Card>
      </Col>
    </Row>
  </section>
);

export const BlogSection: React.FC = () => (
  <section style={{ marginBottom: 50 }}>
    <Title level={2}>Legal Insights</Title>
    <Row gutter={[16, 16]}>
      <Col md={12} sm={24}>
        <Card title="Understanding Civil Litigation">
          <Paragraph>
            A guide to navigating civil court processes and key points to know before filing a suit.
          </Paragraph>
        </Card>
      </Col>
      <Col md={12} sm={24}>
        <Card title="Preventing Contract Disputes">
          <Paragraph>
            How to draft clear contracts that minimize the risk of future legal complications.
          </Paragraph>
        </Card>
      </Col>
    </Row>
  </section>
);

export const FAQSection: React.FC = () => (
  <section style={{ marginBottom: 50 }}>
    <Title level={2}>Frequently Asked Questions</Title>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Paragraph>
            <strong>Q: How do I know if I need a civil lawyer?</strong><br />
            A: If you're facing issues involving contracts, property, or disputes without criminal elements, a civil lawyer can help.
          </Paragraph>
          <Paragraph>
            <strong>Q: How are your fees structured?</strong><br />
            A: Fees are discussed transparently upfront and vary based on case complexity and required hours.
          </Paragraph>
          <Paragraph>
            <strong>Q: What should I bring to the first consultation?</strong><br />
            A: Relevant documents, identity proof, and a summary of your legal issue.
          </Paragraph>
        </Card>
      </Col>
    </Row>
  </section>
);
