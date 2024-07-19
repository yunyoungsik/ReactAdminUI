import { GridColDef } from '@mui/x-data-grid';
import './add.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpne: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${props.slug}s`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 111,
          img: '',
          lastName: 'test',
          firstName: 'Test',
          email: 'test@test.com',
          phone: '123 456 789',
          createdAt: '07.19.2024',
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new item
    // axios.post(`/api/${slug}s`, {})
    mutation.mutate();
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpne(false)}>
          X
        </span>
        <h1>Add New {props.slug}</h1>

        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
