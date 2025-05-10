import React, { useState, useRef } from "react";
import { Layout, Menu, Form, Input, Button, Row, Col, Typography, Card, Switch, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as emailjs from "@emailjs/browser";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { services, testimonials } from "../constants";
import { BlogSection, CaseStudiesSection, FAQSection } from "./AdditionalSections";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const LawyerPortfolio: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const caseStudiestRef = useRef<HTMLDivElement | null>(null);
  const FaqRef = useRef<HTMLDivElement | null>(null);


  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const sectionOffsetTop = ref.current.offsetTop;
      const headerHeight = 64;
      const scrollPosition = sectionOffsetTop - headerHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: (values, { resetForm }) => {
      emailjs.send(
        "service_id",
        "template_id",
        values,
        "public_key"
      ).then(() => {
        alert("Message sent successfully");
        resetForm();
      }).catch(() => {
        alert("Failed to send message");
      });
    }
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: isDarkMode ? "#1a1a1a" : "#fff",
          colorTextBase: isDarkMode ? "#fff" : "#000",
        },
      }}
    >
      <Layout>
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}
        >
          <Menu
            theme={isDarkMode ? "dark" : "light"}
            mode="horizontal"
            selectedKeys={[]}
          >
            <Menu.Item key="1" onClick={() => scrollToSection(aboutRef)}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={() => scrollToSection(aboutRef)}>
              About
            </Menu.Item>
            <Menu.Item key="3" onClick={() => scrollToSection(servicesRef)}>
              Services
            </Menu.Item>
            <Menu.Item key="4" onClick={() => scrollToSection(testimonialsRef)}>
              Testimonials
            </Menu.Item>
            <Menu.Item key="5" onClick={() => scrollToSection(caseStudiestRef)}>
              Legal Insights
            </Menu.Item>
            <Menu.Item key="6" onClick={() => scrollToSection(blogRef)}>
              Blog Section
            </Menu.Item>
            <Menu.Item key="7" onClick={() => scrollToSection(FaqRef)}>
              FAQ
            </Menu.Item>
            <Menu.Item key="8" onClick={() => scrollToSection(contactRef)}>
              Contact
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "50px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Row className="text-center mb-5">
              <Col span={24}>
                <Title>Palash Chakole - Civil Lawyer</Title>
                <Paragraph>
                  Trusted legal expertise in civil law with over a decade of
                  dedicated service.
                </Paragraph>
              </Col>
            </Row>

            <Row gutter={32} className="mb-5" ref={aboutRef}>
              <Col md={12} sm={24}>
                <Title level={2}>About Me</Title>
                <Paragraph>
                  I specialize in civil law, offering legal counsel and
                  representation for individuals and businesses in disputes
                  related to property, contracts, torts, and family matters. My
                  mission is to provide fair and just solutions with integrity
                  and clarity.
                </Paragraph>
                <Paragraph>
                  With a reputation for thorough case analysis and reliable
                  legal guidance, I have helped numerous clients navigate
                  complex legal systems and achieve favorable outcomes. I
                  believe in transparent communication and ethical practice.
                </Paragraph>
              </Col>
              <Col md={12} sm={24}>
                <img
                  src="https://www.creativehatti.com/wp-content/uploads/edd/2023/10/Indian-lawyer-with-envelope-in-hand-Large-size.jpg"
                  alt="Palash Chakole"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </Col>
            </Row>

            {/* Services Section with Vertical Timeline */}
            <Row gutter={32} className="mb-5" ref={servicesRef}>
              <Col span={24}>
                <Title level={2}>Services</Title>
                <VerticalTimeline lineColor="#3e497a">
                  {services.map((service) => (
                    <VerticalTimelineElement
                      key={service.id}
                      className="vertical-timeline-element--work"
                      date="Ongoing"
                      iconStyle={{ background: "#3e497a", color: "#fff" }}
                      icon={<i className={service.icon}></i>}
                      contentStyle={{
                        background: isDarkMode ? "#1f1f1f" : "#fff",
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                      contentArrowStyle={{
                        borderRight: isDarkMode
                          ? "7px solid #1f1f1f"
                          : "7px solid #fff",
                      }}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {service.title}
                      </h3>
                      <p>{service.description}</p>
                    </VerticalTimelineElement>
                  ))}
                </VerticalTimeline>
              </Col>
            </Row>

            <Row className="mb-5" ref={testimonialsRef}>
              <Col span={24}>
                <Title level={2}>Client Testimonials</Title>
                <Row gutter={[16, 16]}>
                  {testimonials.map((item) => (
                    <Col md={8} sm={24} key={item.id}>
                      <Card hoverable style={{ height: "100%" }}>
                        <Paragraph>
                          <strong>{item.name}</strong>
                        </Paragraph>
                        <Paragraph>"{item.feedback}"</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            <CaseStudiesSection ref={caseStudiestRef} />
            <BlogSection ref={blogRef} />
            <FAQSection ref={FaqRef} />

            <Row ref={contactRef}>
              <Col md={12} sm={24}>
                <Title level={2}>Contact Me</Title>
                <Form layout="vertical" onFinish={formik.handleSubmit}>
                  <Form.Item label="Name">
                    <Input
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      required
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                    />
                  </Form.Item>
                  <Form.Item label="Message">
                    <Input.TextArea
                      name="message"
                      rows={4}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      required
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </motion.div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          © 2025 Palash Chakole. All Rights Reserved.
          <div style={{ marginTop: 10 }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              Twitter
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 10px" }}
            >
              WhatsApp
            </a>
            <a href="mailto:youremail@gmail.com" style={{ margin: "0 10px" }}>
              Gmail
            </a>
          </div>
        </Footer>

        {/* Dark Mode Switch */}
        <div style={{ position: "fixed", top: "90px", right: "20px" }}>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Layout>
    </ConfigProvider>
  );
};

export default LawyerPortfolio;
