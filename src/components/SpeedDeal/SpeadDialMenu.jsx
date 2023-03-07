import * as React from 'react';

import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
const actions = [
  { icon: <ModeEditIcon />, name: 'Edit' },
  { icon: <DeleteForeverIcon />, name: 'Delete' },
];

export const SpeedDialMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <>
      <Backdrop
        open={open}
        sx={{
          display: 'flex',
          transform: 'translateZ(0px)',
          flexGrow: 1,
        }}
      />
      <SpeedDial
        directionLeft
        ariaLabel="SpeedDial menu"
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 8,
        }}
        icon={<SpeedDialIcon />}
        onClose={handleToggle}
        onOpen={handleToggle}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleToggle}
          />
        ))}
      </SpeedDial>
    </>
  );
};
