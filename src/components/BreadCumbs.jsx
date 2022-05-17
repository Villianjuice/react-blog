import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({ currentUser }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ p: 2 }}>
        <Link to="/">Home</Link>
        <Link to="/material-ui/getting-started/installation/">
          User
        </Link>
        <Typography color="text.primary">{currentUser && currentUser.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}
