import React from 'react';
import {makeStyles,  withStyles  ,AppBar ,Toolbar,Typography,IconButton,Badge } from '@material-ui/core'
import MailIcon  from '@material-ui/icons/Mail';
import MenuIcon   from '@material-ui/icons/Menu';
import ShoppingCartIcon    from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='default' position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            Nowości
          </Typography>

          <Badge badgeContent={4} color="primary">
                <MailIcon />
         </Badge>

         <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>

        </Toolbar>
      </AppBar>
      <body className= "cialo">
          <h1>
            Lorem Ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit arcu, condimentum eget ante nec, rhoncus porttitor neque. Mauris eget urna in sem fringilla posuere nec in turpis. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit elit, bibendum non arcu a, molestie mollis ante. Quisque tortor arcu, congue vel ipsum vitae, congue mattis ligula. Donec ultrices in arcu a vestibulum. Cras magna purus, pulvinar quis facilisis id, lacinia sit amet erat. Morbi neque dui, placerat sit amet lorem sed, congue condimentum ex. Sed lacinia accumsan lorem, vel gravida justo egestas a. Mauris posuere sem a mollis pellentesque. Nunc bibendum sapien ut sem laoreet, finibus ullamcorper libero viverra. Aliquam erat volutpat. Aenean ut tincidunt augue, quis iaculis nibh. Suspendisse iaculis non turpis a feugiat.
          </p>
      </body>
    </div>
  );
}