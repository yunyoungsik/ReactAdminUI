import { useState } from 'react';
import './products.scss';
import DataTable from '../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="product" />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'price',
    width: 200,
  },
  {
    field: 'producer',
    type: 'string',
    headerName: 'Producer',
    width: 200,
  },
  {
    field: 'createdAt',
    type: 'string',
    headerName: 'Created At',
    width: 200,
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean'
  },
];

const Products = () => {
  const [open, setOpne] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpne(true)}>Add New Products</button>
      </div>

      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpne={setOpne} slug="product" columns={columns} />}
    </div>
  );
};

export default Products;
