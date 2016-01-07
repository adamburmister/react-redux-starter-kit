interface Window {
    // The redux developer tools window
    devToolsExtension?: any;

    // Redux's initial page state global
    __INITIAL_STATE__?: Object;

    NODE_ENV?: string;
    __DEV__?: Boolean;
    __PROD__?: Boolean;
    __DEBUG__?: Boolean;
    __DEBUG_NEW_WINDOW__?: Boolean;
    __BASENAME__?: string;
}
