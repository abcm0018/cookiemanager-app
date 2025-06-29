import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
    setFormValidation({});
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  // Controlar la entrada del usuario
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log(target.value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setFormValidation({});
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const field of Object.keys(formValidations)) {
      const [validationFn, errorMessage] = formValidations[field];
      const fieldValue = formState[field];

      formCheckedValues[`${field}Valid`] = validationFn(fieldValue)
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    setFormState,
    formValidation,
    isFormValid,
  };
};
