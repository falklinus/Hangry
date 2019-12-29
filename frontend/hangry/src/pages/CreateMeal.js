import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  ...theme.spreadThis
});

class CreateMeal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      restaurant: "",
      ingredients: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="title"
              name="title"
              type="text"
              label="Title"
              className={classes.textField}
              onChange={this.handleChange}
              fullWidth
              autoComplete="off"
            />
            <TextField
              id="restaurant"
              name="restaurant"
              type="text"
              label="Restaurant"
              className={classes.textField}
              onChange={this.handleChange}
              fullWidth
              autoComplete="off"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateMeal);
