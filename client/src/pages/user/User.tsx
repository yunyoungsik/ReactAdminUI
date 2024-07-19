import { useQuery } from '@tanstack/react-query';
import Single from '../../components/single/Single';
// import { singleUser } from '../../data';
import './user.scss';
import { useParams } from 'react-router-dom';

const User = () => {
  const {id} = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetch(`http://localhost:8800/api/users/${id}`).then((res) => res.json()),
  });

  console.log(data)

  return <div className="user">{isLoading ? 'Loading...' : <Single {...data} />}</div>;
};

export default User;
