import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

const CheckAttend = ({ anchorEl, setAnchorEl, onChangeCheck }) => {
  const ListItemTexts = [
    '미체크',
    '출석',
    '지각',
    '결석',
    '공결',
    '병결',
    '휴가',
  ];
  const ListItemValues = [
    'NONE',
    'PRESENT',
    'TARDY',
    'ABSENT',
    'OFFICIAL_ABSENT',
    'ILLNESS',
    'VACATION',
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <List>
        {ListItemTexts.map((text, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                onClick={() => onChangeCheck(ListItemValues[index])}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Popover>
  );
};

export default CheckAttend;
