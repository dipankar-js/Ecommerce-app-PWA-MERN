import React, { forwardRef, useEffect } from 'react';
import { string, func, bool } from 'prop-types';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';

import './style.scss';

const FormInput = forwardRef(({label, type, placeholder, register, disabled, setValue, onMaskChange, pattern, hiddenLabel, name, className, required, masked, ...rest}, ref) => {

  useEffect(() => {
    console.log("masked", masked);
    if (masked && register && name) {
      const attribute = Object.assign({}, required && { required: true }, pattern && { pattern });
      register({ name, type: 'custom', ...attribute });
    }
  }, [name, register, required]);

  function onMaskValueChange(data) {
    console.log('onMaskValueChange', data.value);
    const { value } = data;
    if (setValue) {
      setValue(name, value);
    }
    if (typeof onMaskChange === 'function') {
      onMaskChange(value, name);
    }
  }

  return (
    <div className={classnames(className, 'text-input')}>
      <label className="input-label-wrapper">
        {label ?
          <div className="input-label">
            {label}{required && <span className="required-field-label">*</span>}
        </div> : <div className=" input-label input-label-none">{hiddenLabel}</div>
        }
        <div
          className={classnames('input-wrapper')}
        >
          {masked ?
          <NumberFormat
          className={
            classnames('common-input')
          }
          placeholder={placeholder}
          // onBlur={blurChange}
          disabled={disabled}
          name={name}
          onValueChange={onMaskValueChange}
          {...rest}
        /> :
          <input
            className={
              classnames('common-input')
            }
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
            {...rest}
          />}
        </div>
      </label>
    </div>
  );
});


FormInput.propTypes = {
  label: string,
  type: string,
  placeholder: string,
  name: string,
  id: string,
  ref: func,
  className: string,
  required: bool,
};

FormInput.defaultProps = {
  type: 'text',
  placeholder: ''
};


export default FormInput;
