  
import { LCDClient } from '@terra-money/terra.js';
import React from 'react';

const TerraContext = React.createContext({
  terraClient : LCDClient.prototype,
  AnchorProtocol : null,
});


export default TerraContext;
