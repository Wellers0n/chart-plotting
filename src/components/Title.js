import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1)
  }
}));

export default function Title(props) {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      align="center"
      component="h2"
      variant="h6"
      gutterBottom
    >
      <div data-testid="nome">{`${props.nome}'s Challenge`}</div>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};
