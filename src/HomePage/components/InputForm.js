import React from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class InputForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { rootStore } = this.props
        const { pokemonStore } = rootStore
        pokemonStore.setParams({limit: values.limit, offset: values.offset})
        pokemonStore.fetchData()
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const offsetError = isFieldTouched('offset') && getFieldError('offset');
    const limitError = isFieldTouched('limit') && getFieldError('limit');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Offset" validateStatus={offsetError ? 'error' : ''} help={offsetError || ''}>
          {getFieldDecorator('offset', {
            rules: [{ required: true, message: 'Please input your offset!' }],
          })(
            <Input 
              placeholder="offset"
            />,
          )}
        </Form.Item>
        <Form.Item label="Limit" validateStatus={limitError ? 'error' : ''} help={limitError || ''}>
          {getFieldDecorator('limit', {
            rules: [{ required: true, message: 'Please input your limit!' }],
          })(
            <Input
              placeholder="limit"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Get Pokes
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedInputForm = Form.create({ name: 'input-form' })(InputForm);
export default inject('rootStore') (observer(WrappedInputForm))
