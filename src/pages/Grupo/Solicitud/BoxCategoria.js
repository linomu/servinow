import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ConsultarCategoriaService} from '../services'


export const BoxCategoria = ({ callback }) => {
  const [categoria, setCategorias] = useState([]);
  useEffect(() => {
    ConsultarCategoriaService()
      .then(request => {
        console.log(request.data);
        setCategorias(request.data)
        
      })
      .catch(() => console.log("NO GET"));
  }, []);

  const getIdCategoria = id => {
    let find = categoria.find(categoria => categoria.id_categoria === id);
    if (find === undefined) {

    } else {
      callback(find.id);
    }
  };

  //Todo Validar
  return (
    <Autocomplete
      id="autoCompletedId"
      options={categoria}
      getOptionLabel={option => option.nombre}
      style={{ marginBottom: 10, marginTop: 10 }}
      renderInput={params => (
        <TextField
          id="inputOption"
          {...params}
          label='Categoria'
          variant='outlined'
          required
        />
      )}
      onInputChange={(e, input) => getIdCategoria(input)}
      onChange={(e, input) => getIdCategoria(input)}
    />
  );
};
