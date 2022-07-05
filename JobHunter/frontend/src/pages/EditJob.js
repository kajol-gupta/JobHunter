import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "../redux/actions/jobActions";
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;


function EditJob({ match }) {

  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch()
  function onFirstFormFinish(values) {
    setJobInfo(values);
    setActiveTab("1");
  }
  function onFinalFormFinish(values) {
    const finalObj = { ...jobInfo, ...values };
    finalObj._id = match.params.id;
    console.log(finalObj)
    dispatch(editJob(finalObj))
  }

  const { jobs } = useSelector(state => state.jobsReducer)

  const job = jobs.find(job => job._id == match.params.id)

  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job Info" key="0">
            <Form layout="vertical" onFinish={onFirstFormFinish} initialValues={job}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Please enter the title!' },
                    { type: 'string', min: 2, message: 'Invalid title!' }
                    ]}
                    label="Title"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="department"
                    rules={[{ required: true, message: 'Please enter the department!' },
                    { type: 'string', min: 2, message: 'Invalid department!' }
                    ]}
                    label="Department"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="experience"
                    rules={[{ required: true, message: 'Please enter the experience!' }]}
                    label="Experience"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryFrom"
                    rules={[{ required: true }]}
                    label="Salary From"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryTo"
                    rules={[{ required: true }]}
                    label="Salary To"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="skillsRequired"
                    rules={[{ required: true, message: 'Please enter skills required!' },
                    { type: 'string' }]}
                    label="Skills"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    rules={[{ required: true, message: 'Please select minimum qualification!' }]}
                    label="Minimum Qualification"
                  >
                    <Select placeholder='Select Minimum Qualification'>
                      <Option value="Degree">Degree</Option>
                      <Option value="Intermediate">Intermediate</Option>
                      <Option value="High School">High School</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="smallDescription"
                    rules={[{ required: true }, { type: 'string' }]}
                    label="Small description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="fullDescription"
                    rules={[{ type: 'string' }]}
                    label="Full description"
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>

              <Button htmlType="submit">Next</Button>
            </Form>
          </TabPane>
          <TabPane tab="Company Info" key="1">
            <Form layout='vertical' onFinish={onFinalFormFinish} initialValues={job}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{ required: true, message: 'Please enter company name!' },
                    { type: 'string', message: 'Invalid company name!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    label="Company Email"
                    rules={[{ required: true, message: 'Please Enter email!', },
                    { type: 'email', message: 'Invalid email!' }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="phoneNumber"
                    label="Phone number"
                    rules={[{ required: true, message: 'Please Enter mobile number!', },
                    { min: 10, max: 10, message: 'Please enter 10 digit mobile number!' },
                    ]}
                  >
                    <Input type='number' />
                  </Form.Item>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="companyDescription"
                    label="Company Description"
                    rules={[{ required: true, message: 'Please enter company description!' }]}
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

              </Row>
              <Button onClick={() => { setActiveTab("0") }}>Previous</Button>
              <Button htmlType="submit">Edit Job</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  )
}

export default EditJob