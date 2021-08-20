import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup.string().trim().required("First name required").min(2, "First name must be at least 2 characters"),
  last_name: yup.string().trim().required("Last name required").min(2, "Last name must be at least 2 characters"),
  email: yup.string().trim().required("Must include email").email("Must enter a valid email"),
  password: yup.string().trim().required("A password is required"),
  terms: yup.boolean().oneOf([true], "Must accept terms"),
});

export default formSchema;
