import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../services/store";
import { setAccessToken } from "../../../services/reducers/auth";
import { useNavigate } from "react-router-dom";

interface HeaderLayoutProps {
  open: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const HeaderLayout = (props: HeaderLayoutProps): JSX.Element => {
  const { open, toggleDrawer, drawerWidth } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    dispatch(setAccessToken(undefined));
    navigate("/login");
  };

  return (
    <AppBar position="absolute" open={open} drawerwidth={drawerWidth}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>

        <Button onClick={onLogout} variant="contained" color="info">
          <LogoutIcon />
        </Button>
        {/* <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderLayout;
