export const validateForm = (formData) => {
  return Object.values(formData).every((item) => item);
};
