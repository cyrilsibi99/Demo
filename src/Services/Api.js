import axios from "axios"

const url=" http://127.0.0.1:3003/users";

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
    
}

export const addUsers = async (values) =>{
    return await axios.post(url,values);
}

export const editUser = async (id,user) =>{
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}