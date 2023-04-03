import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().min(2).max(25).required(),
  spanish_name: Yup.string().min(2).max(25).required(),
});
