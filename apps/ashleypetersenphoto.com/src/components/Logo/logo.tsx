import React from 'react'
import {_LogoAnchor, _LogoLine1, _LogoLine2} from './logo.styles'
import {LogoTypes} from "./logo.types";


export const Logo: LogoTypes = ({css}) => (
    <_LogoAnchor href="/" passHref css={css}>
        <_LogoLine1>Ashley Petersen</_LogoLine1>
        <_LogoLine2>Photography</_LogoLine2>
    </_LogoAnchor>
)
