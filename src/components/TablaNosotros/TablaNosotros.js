import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core/';
import {useStyles} from "./TablaNosotros.style"

const TablaNosotros = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.contenedorTabla}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.fuentes} align="center">Año</TableCell>
            <TableCell className={classes.fuentes} align="center">Premios</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            <TableRow>
                <TableCell className={classes.fuentes} align="center">
                    1959
                </TableCell>

                <TableCell className={classes.fuentes} align="center">
                  Mejor Bici del Mundo Mundial
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className={classes.fuentes} align="center">
                  1978
                </TableCell>

                <TableCell className={classes.fuentes} align="center">
                  Mejor Pedal para no humanos
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className={classes.fuentes} align="center">
                  1983
                </TableCell>

                <TableCell className={classes.fuentes} align="center">
                  Gran campeón
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className={classes.fuentes} align="center">
                  1994
                </TableCell>

                <TableCell className={classes.fuentes} align="center">
                  Premio al Diseño Experimental
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell className={classes.fuentes} align="center">
                  2006
                </TableCell>

                <TableCell className={classes.fuentes} align="center">
                  Quinto Puesto Mundial de Bicis
                </TableCell>
            </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
  );
}


export default TablaNosotros