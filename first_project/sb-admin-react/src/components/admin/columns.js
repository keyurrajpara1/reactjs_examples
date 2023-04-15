import { format } from 'date-fns';
export const columns = [
	{
		Header: "#",
		Footer: "#",
		accessor: "id",
	},
	{
		Header: "Name",
		Footer: "Name",
		columns: [
			{
				Header: "First name",
				Footer: "First name",
				accessor: "first_name",
			},
			{
				Header: "Last name",
				Footer: "Last name",
				accessor: "last_name",
			}
		]
	},
	{
		Header: "Other Details",
		Footer: "Other Details",
		columns: [
			{
				Header: "Email",
				Footer: "Email",
				accessor: "email",
			},
			{
				Header: "Gender",
				Footer: "Gender",
				accessor: "gender",
			},
			{
				Header: "Date of birth",
				Footer: "Date of birth",
				accessor: "date_of_birth",
				Cell: ({ value }) => {
					return format(new Date(value), 'dd-mm-yyyy')
				}
			},
			{
				Header: "Age",
				Footer: "Age",
				accessor: "age",
			},
			{
				Header: "Country",
				Footer: "Country",
				accessor: "country",
			},
			{
				Header: "Phone",
				Footer: "Phone",
				accessor: "phone",
			}
		]
	}
];