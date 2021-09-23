import React, { useEffect ,useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { addUsers, editUser, getUsers } from '../Services/Api';
import { useHistory, useParams } from 'react-router';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   phone: yup
//     .string('Enter your Phone')
//     .min(10, 'Phone should be of minimum 10 characters length')
//     .required('Phone is required'),
//     name: yup
//     .string('Enter your name')
//     .min(3, 'name should be of minimum 3 characters length')
//     .required('name is required'),
    
// });

const useStyles = makeStyles({
  form:{
    width:'50%',
    margin:'5% 0 0 25%',
    '& > *':{
      margin: "20px "
    }
  }
})

const initialValues= {
    name: '',
    username: '',
    email: '',
    phone: ''
  }

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const {name,username,email,phone}=user;
  const { id }=useParams();

  const classes=useStyles();
  const history=useHistory();
useEffect(()=>{
    loadUserData();
  },[]);

//   const formik = useFormik({
//     initialValues:user,
//     validationSchema: validationSchema,
    
//     onSubmit: (values) => {
//       // alert(JSON.stringify(values, null, 2));
//       addUserDetails(values);
//       history.push('/users')
      
//     },
//   });

  
 
    //   formik.values.name=response.data.name;

   
  const loadUserData = async () => {
      const response = await getUsers(id);
      setUser(response.data);
  } 
  
  
  
  const onValueChange=(e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
  const editUserDetails = async () =>{
      console.log('id : '+id+'  User : '+user)
    await editUser(id,user);
    history.push('/users');
  }
  console.log(user);

  return (
    <div>
      <form  className={classes.form}>
        <h3>Edit User</h3>
      <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={name}
          onChange={(e)=>onValueChange(e)}
        //   error={formik.touched.name && Boolean(formik.errors.name)}
        //   helperText={formik.touched.name && formik.errors.name}
        />
              <TextField
          fullWidth
          id="username"
          name="username"
          label="username"
          value={username}
          onChange={(e)=>onValueChange(e)}
        //   error={formik.touched.username && Boolean(formik.errors.username)}
        //   helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e)=>onValueChange(e)}
        //   error={formik.touched.email && Boolean(formik.errors.email)}
        //   helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          value={phone}
          onChange={(e)=>onValueChange(e)}
        //   error={formik.touched.phone && Boolean(formik.errors.phone)}
        //   helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button color="primary" variant="contained" fullWidth onClick={()=>editUserDetails()}>
          Edit User
        </Button>
      </form>
    </div>
  );
};



export default EditUser;