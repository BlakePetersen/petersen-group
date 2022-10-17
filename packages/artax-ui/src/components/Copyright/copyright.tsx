import {CopyrightTypes} from './copyright.types'

export const Copyright: CopyrightTypes = ({statement}) => {
    return (
        <div>
            &copy;
            {new Date().getFullYear()} {statement && statement}
        </div>
    )
}
