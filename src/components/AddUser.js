import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { addUsers } from '../Services/Api';
import { useHistory } from 'react-router';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string('Enter your Phone')
    .min(10, 'Phone should be of minimum 10 characters length')
    .required('Phone is required'),
    name: yup
    .string('Enter your name')
    .min(3, 'name should be of minimum 3 characters length')
    .required('name is required'),
    
});

const useStyles = makeStyles({
  form:{
    width:'50%',
    margin:'5% 0 0 25%',
    '& > *':{
      margin: "20px "
    }
  }
})


const AddUser = () => {
  const classes=useStyles();
  const history=useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      username: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      addUserDetails(values);
      history.push('/users')
      
    },
  });
  const addUserDetails = async (values) =>{
    await addUsers(values);
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h3>Add User</h3>
      <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          style={{ paddingBottom: "15px" }}

        />
              <TextField
          fullWidth
          id="username"
          name="username"
          label="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          style={{ paddingBottom: "15px" }}

        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          style={{ paddingBottom: "15px" }}

        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          style={{ paddingBottom: "15px" }}

        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};



export default AddUser;