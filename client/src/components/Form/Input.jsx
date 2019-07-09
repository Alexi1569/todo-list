import React from 'react';
import classnames from 'classnames';

const Input = ({ el, label, settings, error, handleInputChange, file }) => {
  let template = '';
  const isFileInput = settings.type === 'file';
  const isTextareaInput = el === 'textarea';

  const inputClass = classnames('form__group', {
    'form__group--file': isFileInput,
    'form__group--textarea': isTextareaInput,
    loaded: isFileInput && file !== null
  });

  switch (el) {
    case 'input': {
      template = (
        <div className={inputClass}>
          <label htmlFor={settings.id}>{label}</label>
          <div className="form__group-input">
            {isFileInput && (
              <span>{file === null ? label : 'File loaded'}</span>
            )}
            <input onChange={handleInputChange} {...settings} />
          </div>
          {error && <p className="form__group-message">{error}</p>}
        </div>
      );
      break;
    }
    case 'textarea': {
      template = (
        <div className={inputClass}>
          <label htmlFor={settings.id}>{label}</label>
          <div className="form__group-input">
            <textarea onChange={handleInputChange} {...settings} />
          </div>
          {error && <p className="form__group-message">{error}</p>}
        </div>
      );
      break;
    }
    case 'checkbox': {
      template = (
        <div className={inputClass}>
          <label className="checkbox">
            <input
              type={settings.type}
              name={settings.name}
              id={settings.id}
              onChange={handleInputChange}
              checked={settings.value}
              value={settings.value}
            />
            <span>{label}</span>
          </label>
        </div>
      );
      break;
    }
    default: {
      template = '';
      break;
    }
  }

  return <React.Fragment>{template}</React.Fragment>;
};

export default Input;
