import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import dataGenerate from "./data";
import getTimes from "./helpers/getTimes";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./components/Title";
import Chart from "./components/Chart";
import Button from "@material-ui/core/Button";
import beautify from 'js-beautify'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  grid: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: "#DDDEE1"
  },
  gridChart: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

// main
function App() {
  const [data, setData] = useState("");
  const [dataChart, setDataChart] = useState([]);
  const classes = useStyles();

  function updateCode(editor, data, value) {
    setData(value);
    const parseObject = JSON.parse(value)
    console.log(value)
    setDataChart(parseObject);

  }

  function generateChart(e) {
    const result = getTimes(dataGenerate);
    setDataChart(result);
    const resultJson = JSON.stringify(result);
    const beautifyResult = beautify(resultJson)
    setData(beautifyResult);
  }

  const options = {
    mode: { name: "javascript", json: true },
    theme: "material",
    lineNumbers: true,
    unit: "line"
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid xs={12} item className={classes.grid}>
          <Title nome={"Wellerson"} />
        </Grid>
        <Grid xs={12} item className={classes.grid}>
          <CodeMirror defineMode={{name: 'custom'}}
            value={data}
            onChange={updateCode}
            onBeforeChange={async (editor, data, value) => {
              setData(value);
            }}
            options={options}
          />
        </Grid>
        <Grid xs={12} item className={classes.gridChart}>
          <Chart data={dataChart} />
        </Grid>
        <Grid xs={12} item className={classes.grid}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={generateChart}
          >
            Generate Chart
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
