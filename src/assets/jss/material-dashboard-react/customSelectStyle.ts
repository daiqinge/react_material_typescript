import { dangerColor, primaryColor, successColor } from 'assets/jss/material-dashboard-react';
import { StyleRulesCallback } from '@material-ui/core';

const customSelectStyle: StyleRulesCallback = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    underline: {
        '&:hover:not($disabled):before,&:before': {
        backgroundColor: '#D2D2D2',
        height: '0px !important',
        },
        '&:after': {
        backgroundColor: primaryColor,
        },
    },
    underlineError: {
        '&:after': {
        backgroundColor: dangerColor,
        },
    },
    underlineSuccess: {
        '&:after': {
        backgroundColor: successColor,
        },
    },
    feedback: {
        position: 'absolute',
        top: '18px',
        right: '0',
        zIndex: 2,
        display: 'block',
        width: '24px',
        height: '24px',
        textAlign: 'center',
        pointerEvents: 'none',
    },
    marginTop: {
        marginTop: '16px',
    },
});
export default customSelectStyle;
