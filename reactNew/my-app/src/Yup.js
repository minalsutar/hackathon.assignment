import * as Yup from 'yup';

export const loginSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    password:Yup.string().min(6).required("enter password")
});