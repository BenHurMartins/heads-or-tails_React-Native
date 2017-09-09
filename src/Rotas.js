import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key='principal' component={Principal} initial title='Cara ou Coroa'/>
    <Scene key='sobrejogo' component={SobreJogo} />
    <Scene key='outrosjogos' component={OutrosJogos} />
    <Scene key='resultado' component={Resultado} title='Resultado'/>
  </Router>
);

export default Rotas;
