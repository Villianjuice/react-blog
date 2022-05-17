import { Container } from '@mui/material';
import React from 'react';
import BasicBreadcrumbs from '../components/BreadCumbs';
import TitlebarImageList from '../components/ImageList';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/action';
import { useParams } from 'react-router-dom';

const Post = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getUser(Number(id)));
  }, []);
  return (
    <>
      <Header currentUser={currentUser}/>
      <BasicBreadcrumbs currentUser={currentUser} />
      <Container maxWidth="lg">
        <TitlebarImageList />
      </Container>
    </>
  );
};

export default Post;
