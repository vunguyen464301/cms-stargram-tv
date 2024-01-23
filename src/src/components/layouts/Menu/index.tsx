import "./styles.scss";
import { styled } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { menuItems, secondaryListItems } from "../Menu/data";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuProps {
  open: boolean;
  toggleDrawer: () => void;
  drawerWidth: number;
}

interface StyledDrawerProps extends DrawerProps {
  open: boolean;
  drawerWidth: number; // Define the custom prop and its type
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<StyledDrawerProps>(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const MenuLayout = (props: MenuProps): JSX.Element => {
  const { drawerWidth, open, toggleDrawer } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const paths = location.pathname.split("/");

  return (
    <Drawer
      variant="permanent"
      open={open}
      drawerWidth={drawerWidth}
      className="component-menu"
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {menuItems.map((menuItem, menuIndex) => {
          const _pathName = menuItem.navigate.split("/").at(-1);

          return (
            <ListItemButton
              key={menuIndex}
              onClick={() => navigate(menuItem.navigate)}
              className={`nav-${
                paths.length > 1 && paths[1] === _pathName ? "on" : "off"
              }`}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.title} />
            </ListItemButton>
          );
        })}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
};

export default MenuLayout;
