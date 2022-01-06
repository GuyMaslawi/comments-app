import {styled} from '@mui/system';
import {IconButton} from "@mui/material";

export const Wrapper = styled('div')`
  background-color: #fff;
  border-radius: 0 2.5rem 2.5rem 2.5rem;
  padding: 1.5rem;
  color: #000;
  margin-bottom: 2rem;
  box-shadow: .1rem .1rem 1rem #ccc;
  display: flex;
  align-items: center;
  text-align: left;
  min-height: 8rem;
  font-size: 1.6rem;
  line-height: 1.3;
  position: relative;
`;

export const IconButtonStyle = styled(IconButton)(({theme}) => ({
    position: 'absolute',
    bottom: '.5rem',
    right: '1.5rem',

    '.MuiSvgIcon-root': {
        width: '2rem',
        height: '2rem',
    }
}));
