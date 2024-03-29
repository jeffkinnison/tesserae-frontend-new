import React from 'react';
import PropTypes from 'prop-types';
import { flatten, sortBy, uniqBy } from 'lodash';

import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';


/** CSS styles to apply to table cells. */
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  row: {
    overflowX: 'hidden',
  },
  numberCell: {
    overflowX: 'hidden',
    width: '2%'
  },
  snippetCell: {
    overflowX: 'hidden',
    width: '43%'
  },
}));


function Subtable(props) {
  const { multiresults } = props;

  const classes = useStyles();

  return (
    <Table
      aria-label="multitext-results"
      className={classes.root}
      size="small"
    >
      <TableHead>
        <TableRow
          className={classes.row}
        >
          <TableCell
            className={classes.numberCell}
          >
          </TableCell>
          <TableCell
            className={classes.numberCell}
          >
            <Typography><b>Locus</b></Typography>
          </TableCell>
          <TableCell
            className={classes.snippetCell}
          >
            <Typography><b>Snippet</b></Typography>
          </TableCell>
          <TableCell
            align="right"
            className={classes.numberCell}
          >
            <Typography><b>Score</b></Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { multiresults.map((item, idx) => {
            return (
              <TableRow 
                className={classes.row}
                key={item.unit_id}
              >
                <TableCell
                  className={classes.numberCell}
                >
                  <Typography>
                    {idx + 1}
                  </Typography>
                </TableCell>
                <TableCell
                  className={classes.numberCell}
                >
                  <Typography>
                    {item.tag}
                  </Typography>
                </TableCell>
                <TableCell
                  className={classes.snippetCell}
                >
                  <Typography>
                    {item.snippet}
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.numberCell}
                >
                  <Typography>
                    {Math.floor(item.score)}
                  </Typography>
                </TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}


Subtable.propTypes = {
  /**
   * List of multitext results associated with this match.
   */
  multiresults: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Score of this multitext result.
       */
      score: PropTypes.number,

      /**
       * Raw text of the matching locus.
       */
      snippet: PropTypes.string,

      /**
       * Locus identifier.
       */
      tag: PropTypes.string,

      /**
       * Database id of the unit (locus).
       */
      unit_id: PropTypes.string
    })
  ),
}


export default Subtable;