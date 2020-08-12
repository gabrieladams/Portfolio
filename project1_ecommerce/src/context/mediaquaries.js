import React from 'react';
import { mediaQuaries as mQ } from '../mediaquaries';

const mediaQuaries = React.createContext(mQ);

const MediaQuariesProvider = mediaQuaries.Provider;
const MediaQuariesConsumer = mediaQuaries.Consumer;

export { MediaQuariesProvider, MediaQuariesConsumer };
