export const validateInput = (validation, value, name) => {
  if (validation.required) {
    if (!value) {
      return `${name} must be filled`;
    }
  }

  if (validation.min) {
    if (value.trim().length <= validation.min) {
      return `${name} must be more than ${validation.min} characters`;
    }
  }

  if (validation.req) {
    if (!value.test(validation.reg)) {
      return `${name} must be valid`;
    }
  }

  return true;
};

export const isEmptyObject = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

export const validateResponse = (res, inputs) => {
  if (res.data.errors) {
    const { errors } = res.data;

    for (let error in errors) {
      const err = errors[error];
      inputs[error].error = err.message;
    }
  }
};

export const handleInputChange = (e, name, type, context) => {
  const formData = { ...context.state[name] };
  const inputName = e.target.name;

  if (type === 'file') {
    if (e.target.files[0]) {
      formData.inputs[inputName].file = e.target.files[0];
    } else {
      formData.inputs[inputName].file = null;
    }
  } else if (type === 'checkbox') {
    const prevValue = formData.inputs[inputName].settings.value;
    formData.inputs[inputName].settings.value = !prevValue;
  } else {
    formData.inputs[inputName].settings.value = e.target.value;
  }

  context.setState({
    [name]: formData
  });
};
