import axios from 'axios';
// import * as FontAwesome from "react-icons/fa";

export const columns = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Profile Photo",
    accessor: "profile_image_url",
    Cell: ({ row }) => { return <img src={row.values.profile_image_url} height={100} width={100} />},
  },
  {
    Header: "First name",
    accessor: "first_name",
  },
  {
    Header: "Last name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      return <>
        <button type="button" className="btn btn-light"><i className="fa-regular fa-eye"></i></button>{" "}
        <button type="button" className="btn btn-light"><i className="fa-regular fa-pen-to-square"></i></button>{" "}
        <button type="button" className="btn btn-light"><i className="fa-solid fa-trash"></i></button>
      </>
    },
  },
];

export const formatRowData = (rawData) =>
  rawData.map((info) => ({
    first_name: info.first_name,
    last_name: info.last_name,
    email: info.email,
    profile_image: info.profile_image,
    profile_image_url: info.profile_image_url,
  }));

export const getData = async (pageNumber = 1) => {
    let limit = 10;
    const config = { pageNumber, limit };

    // let funResponse = await axios.post(`http://127.0.0.1:8000/api/home/users`, config).then((response) => {
    let funResponse = await axios.post(`http://localhost/keyur/first_project/example-app/public/api/home/users`, config).then((response) => {
      let responseData = response.data;
      if(responseData.status){
        return responseData.data
      }
    });
    return funResponse;
};
