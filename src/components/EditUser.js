import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Services/Api";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles({
  form: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      margin: "20px ",
    },
  },
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push("/users");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={classes.form}>
        <h3>Edit User</h3>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={name}
          onChange={(e) => onValueChange(e)}
          //   error={formik.touched.name && Boolean(formik.errors.name)}
          //   helperText={formik.touched.name && formik.errors.name}
          style={{ paddingBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="username"
          name="username"
          label="username"
          value={username}
          onChange={(e) => onValueChange(e)}
          //   error={formik.touched.username && Boolean(formik.errors.username)}
          //   helperText={formik.touched.username && formik.errors.username}
          style={{ paddingBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={email}
          onChange={(e) => onValueChange(e)}
          //   error={formik.touched.email && Boolean(formik.errors.email)}
          //   helperText={formik.touched.email && formik.errors.email}
          style={{ paddingBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="phone"
          type="phone"
          value={phone}
          onChange={(e) => onValueChange(e)}
          //   error={formik.touched.phone && Boolean(formik.errors.phone)}
          //   helperText={formik.touched.phone && formik.errors.phone}
          style={{ paddingBottom: "15px" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => editUserDetails()}
        >
          Edit User
        </Button>
      </form>
    </div>

  );
};
export default EditUser;
