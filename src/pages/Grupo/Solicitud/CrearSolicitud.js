import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid
} from '@material-ui/core';
import React, { useState } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const CrearSolicitud = () => {

  const classes = useStyles();

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [barrio, setBarrio] = useState("")
  const [categoria, setCategoria] = useState(1)
  const [habilidad, setHabilidad] = useState("")
  const [img, setImg] = useState("")
  const [propina, setpropina] = useState("")



  const handleChange = (e) => {
    switch (e.target.name) {
      case titulo:
        setTitulo(e.target.value)
        break;
      case descripcion:
        setDescripcion(e.target.value)
        break;
      case barrio:
          setBarrio(e.target.value)
        break;
      case categoria:
          setCategoria(e.target.value)
        break;
      case habilidad:
          setHabilidad(e.target.value)
        break;
      case imagen:
          setImg(e.target.value)
        break;
      case propina:
          setpropina(e.target.value)
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography color="textPrimary" variant="h6">
            Crear Solicitud
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Box my={1}>

            <TextField
              fullWidth
              label="Titulo"
              name="titulo"
              variant="outlined"
              onChange={
                e => {
                  handleChange(e);
                }
              }
            >
            </TextField>
          </Box>
          <Box my={5}>
            <TextField
              label="Descripcion"
              name="descripcion"
              fullWidth
              multiline
              rows={6}
              onChange={
                e => {
                  handleChange(e);
                }
              }
              variant="outlined"
            />

          </Box>
          <Box my={5}>

            <TextField
              fullWidth
              label="Barrio"
              name="barrio"
              variant="outlined"
              onChange={
                e => {
                  handleChange(e);
                }
              }
            >
            </TextField>

          </Box>
          <Grid item xs="5">
            <Box my={5}>
              <Typography color="textPrimary" variant="h7" align="">
                Categoria
              </Typography>

              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value={categoria}
                onChange={handleChangeCategoria}
              >
                {/*Todo categorias */}
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
              </Select>

            </Box>
              
              </Grid>
            <Grid item xs="5">
            <Box my={5}>
              <Typography color="textPrimary" variant="h7" align="">
                Habilidad
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value={categoria}
                onChange={handleChangeCategoria}
              >
                {/*Todo habilidades */}
                <MenuItem value={1}>Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
              </Select>
            </Box>
            
          </Grid>


          <Box my={5}>
            <TextField
              fullWidth
              label="Propina"
              name="propina"
              variant="outlined"
              onChange={
                e => {
                  handleChange(e);
                }
              }
            >
            </TextField>

          </Box>

          <Box my={5}>
            <TextField
              fullWidth
              label="Fecha inicio"
              name="fechaInicio"
              type="datetime-local"
              defaultValue="2020-01-24T10:30"
              onChange={
                e => {
                  handleChange(e);
                }
              }
            >

            </TextField>
          </Box>

          <Box my={5}>
            <TextField
              fullWidth
              label="Fecha fin"
              name="fechaFin"
              type="datetime-local"
              defaultValue="2020-01-24T10:30"
            >

            </TextField>
          </Box>

          <Box my={2}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Crear
                    </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default CrearSolicitud
