import React from 'react';
import classnames from 'classnames';

import Input from './Input';
import Button from '../Button/Button';
import './Form.sass';

const Form = ({
  form,
  bgForm,
  submit,
  toggleForm,
  handleInputChange,
  isMultiPartFormData
}) => {
  const inputsTemplate = [];
  const formClass = classnames('form', { 'form--bg': bgForm });

  for (let input in form.inputs) {
    const inputData = form.inputs[input];

    inputsTemplate.push(
      <Input
        handleInputChange={e =>
          handleInputChange(e, form.name, inputData.settings.type)
        }
        key={inputData.settings.id}
        {...inputData}
      />
    );
  }

  return (
    <form
      encType={isMultiPartFormData ? 'multipart/form-data' : null}
      className={formClass}
      onSubmit={e => submit(e, form.name)}
    >
      {form.caption && <p className="form__caption">{form.caption}</p>}
      {inputsTemplate && <div className="form__inputs">{inputsTemplate}</div>}
      {form.toggler && (
        <div className="form__toggler">
          <span onClick={() => toggleForm(form.toggler.target)}>
            {form.toggler.message}
          </span>
        </div>
      )}
      {form.button && <Button button={form.button} />}
    </form>
  );
};

export default Form;
