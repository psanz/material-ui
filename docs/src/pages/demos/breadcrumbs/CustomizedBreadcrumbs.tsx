import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface CustomBreadcrumbProps extends WithStyles<typeof styles> {}

interface CustomizedBreadcrumbsProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    chip: {
      backgroundColor: theme.palette.grey[100],
      height: 24,
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
    avatar: {
      background: 'none',
      marginRight: -theme.spacing(1.5),
    },
  });

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  alert('You clicked a breadcrumb.'); // eslint-disable-line no-alert
}

function CustomBreadcrumb(props: CustomBreadcrumbProps) {
  const { classes, ...rest } = props;
  return <Chip className={classes.chip} {...rest} />;
}

CustomBreadcrumb.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

const StyledBreadcrumb = withStyles(styles)(CustomBreadcrumb);

function CustomizedBreadcrumbs(props: CustomizedBreadcrumbsProps) {
  const { classes } = props;

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label="Breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          avatar={
            <Avatar className={classes.avatar}>
              <HomeIcon />
            </Avatar>
          }
          onClick={handleClick}
        />
        <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
        <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
      </Breadcrumbs>
    </Paper>
  );
}

CustomizedBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(CustomizedBreadcrumbs);
