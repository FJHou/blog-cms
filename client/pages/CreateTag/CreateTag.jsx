import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import SimpleFluencyForm from './components/SimpleFluencyForm';
import IceContainer from '@icedesign/container';
import './CreateTag.scss';

export default class CreateTag extends Component {
  static displayName = 'CreateTag';

  constructor(props) {
    super(props);
    this.state = {
      value: 'xixi',
    };
  }
  onChange = id => {
    console.log(id);
    this.setState({
      value: id,
    });
  };

  render() {
    const breadcrumb = [
      { text: '标签管理', link: '' },
      { text: '添加标签', link: '#/tag/create' },
    ];
    return (
      <div className="create-tag-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
        <SimpleFluencyForm />
        <IceContainer style={{ height: '500px' }}>
          <RadioGroup value={this.state.value} onChange={this.onChange}>
            <Radio id="xixi">选项1</Radio>
            <Radio id="hehe">选项2</Radio>
            <Radio id="heihei">选项3</Radio>
            <Radio id="haha">选项4</Radio>
          </RadioGroup>
        </IceContainer>
      </div>
    );
  }
}

const prefixCls = 'swift-';

class RadioGroup extends Component {
  render() {
    const { value, dataSource, children, onChange } = this.props;
    return (
      <div className={`${prefixCls}radio-group-wrapper`}>
        {React.Children.map(children, (c, i) => {
          console.log(c.props.id === value);
          // return <Radio checked={c.props.id === value} onChange={onChange} />;
          // console.log(c.props.id, value);
          return React.cloneElement(c, {
            checked: c.props.id === value,
            onChange: () => {
              onChange(c.props.id);
            },
          });
        })}
      </div>
    );
  }
}

class Radio extends Component {
  render() {
    const { id, children, checked, onChange } = this.props;
    console.log('---radio---');
    console.log(this);
    console.log('---radio---');
    return (
      <div className={`${prefixCls}radio-wrapper`}>
        <label htmlFor={id}>
          <input type="radio" id={id} checked={checked} onChange={onChange} />
          <div className={`${prefixCls}radio-section`}>{children}</div>
        </label>
      </div>
    );
  }
}
