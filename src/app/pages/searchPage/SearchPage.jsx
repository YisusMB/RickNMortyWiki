import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPageCreators } from './duck'

import { Flex, Box } from 'reflexbox'
import { Paper, Button, ExpansionPanel, ExpansionPanelSummary, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import Loader from "../../components/Loader"
import WelcomeHeader from '../../components/WelcomeHeader'
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

const genders = [
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'female',
    label: 'Femenino',
  },
  {
    value: 'genderless',
    label: 'Sin genero',
  },
  {
    value: 'unknown',
    label: 'Desconocido',
  },
];

const states = [
  {
    value: 'alive',
    label: 'Vivo',
  },
  {
    value: 'dead',
    label: 'Muerto',
  },
  {
    value: 'unknown',
    label: 'Desconocido',
  },
];

const state = state => ({
  characters: state.searchPage.characters,
  chapters: state.searchPage.chapters,
  searchData: state.searchPage.searchData,
  error: state.searchPage.error,
  loading: state.searchPage.loading
});

const dispatch = {
  getData: searchPageCreators.fetchData,
  getSearchData: searchPageCreators.fetchSearch
};

const INITIAL_STATE = {
  characters: [],
  chapters: [],
  searchData: [],
  characterForm: {
    name: '',
    status: '',
    gender: '',
    type: '',
    specie: ''
  },
  toggledCharacters: false,
  toggledChapters: false,
  loading: true,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

@connect(state, dispatch)
class searchPage extends Component {
  state = INITIAL_STATE;

  componentDidMount(){
    this.props.getData();
    this.props.getSearchData();
  };

  toggleSearchCharacters = () => {
    this.setState({
      toggledCharacters: true
    });
  };

  toggleSearchChapters = () => {
    this.setState({
      toggledChapters: true
    });
  };

  closeToggleChapters = () => {
    this.setState({
      toggledChapters: false
    })
  };

  closeToggleCharacters = () => {
    this.setState({
      toggledCharacters: false
    })
  };

  searchCharacter = (form) => (
    this.props.getSearchData(form)
  );

  handleChange = name => e => {
    const value = e.target.value;

    this.setState(prevState => ({
      characterForm: {
        ...prevState.characterForm,
        [name]: value
      }
    })
    );
  };

  render() {
    const { toggledChapters, toggledCharacters, characterForm } = this.state;
    const { loading, classes } = this.props;

    return (
      loading === true ? (
        <Loader/>
      ) : (
        <Flex wrap align='center' w={1} >
          <Flex wrap align='center' w={1}>
            <Box w={1}>
              <WelcomeHeader PageTitle='Wanna search something?' />
            </Box>
          </Flex>
          <Flex wrap align='baseline' w={1}>
            <Box w={1} p={1}>
              <Paper>
                <Flex wrap align='baseline' w={1}>
                  <Box w={1/2} p={1}>
                    <Button onClick={this.toggleSearchCharacters} disabled={toggledChapters || toggledCharacters} color='secondary'>
                      Personajes
                    </Button>
                  </Box>
                  <Box w={1/2} p={1}>
                    <Button onClick={this.toggleSearchChapters} disabled={toggledChapters || toggledCharacters} color='primary'>
                      Capitulos
                    </Button>
                  </Box>
                </Flex>
                <ExpansionPanel expanded={toggledCharacters || toggledChapters}>
                  <Flex>
                    <Box w={1}>
                      {toggledChapters === true ? (
                        <ExpansionPanelSummary>
                      <Button onClick={this.closeToggleChapters}>
                        Cerrar capitulos
                      </Button>
                        </ExpansionPanelSummary>
                      ) : toggledCharacters === true ? (
                        <ExpansionPanelSummary>
                          <Flex wrap w={1} p={1}>
                          <Box w={[1, 3/4]} p={1}>
                          <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                              id="outlined-name"
                              label="Nombre"
                              className={classes.textField}
                              value={characterForm.name}
                              onChange={this.handleChange('name')}
                              margin="normal"
                              variant="outlined"
                            />
                            <TextField
                              id="outlined-name"
                              style={{ width: '22vh'}}
                              select
                              label="Estatus"
                              className={classes.textField}
                              value={characterForm.status}
                              onChange={this.handleChange('status')}
                              margin="normal"
                              variant="outlined"
                            >
                              {states.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              id="outlined-name"
                              label="Genero"
                              style={{ width: '22vh'}}
                              select
                              className={classes.textField}
                              value={characterForm.gender}
                              onChange={this.handleChange('gender')}
                              SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                }
                              }}
                              margin="normal"
                              variant="outlined"
                            >
                              {genders.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              id="outlined-name"
                              label="Tipo"
                              className={classes.textField}
                              value={characterForm.type}
                              onChange={this.handleChange('type')}
                              margin="normal"
                              variant="outlined"
                            />
                            <TextField
                              id="outlined-name"
                              label="Especie"
                              className={classes.textField}
                              value={characterForm.specie}
                              onChange={this.handleChange('specie')}
                              margin="normal"
                              variant="outlined"
                            />
                          </form>
                          </Box>
                          <Box w={[1,1/4]} pt={[1,3]}>
                            <Button onClick={()=>this.searchCharacter(characterForm)}>
                              Buscar
                            </Button>
                        <Button onClick={this.closeToggleCharacters}>
                          Cerrar personajes
                        </Button>
                          </Box>
                          </Flex>
                        </ExpansionPanelSummary>
                      ) : <div /> }
                    </Box>
                  </Flex>
                </ExpansionPanel>
              </Paper>
            </Box>
          </Flex>
        </Flex>
      )
    )
  }
}

export default withStyles(styles)(searchPage)