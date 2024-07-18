import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="avatar" />;
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 200,
  },
  {
    field: 'createdAt',
    type: 'string',
    headerName: 'Created At',
    width: 200,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
];

const Users = () => {
  const [open, setOpne] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch('http://localhost:8800/api/user').then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpne(true)}>Add New User</button>
      </div>

      {isLoading ? 'Loading...' : <DataTable slug="users" columns={columns} rows={data} />}
      {open && <Add setOpne={setOpne} slug="user" columns={columns} />}
    </div>
  );
};

export default Users;
