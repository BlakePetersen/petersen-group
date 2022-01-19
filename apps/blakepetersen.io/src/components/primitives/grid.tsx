import styled from "styled-components";

const _Grid = styled.div`
	display: grid;
	grid-gap: 3rem;
`;

const Grid = ({ children }) => <_Grid>
	{ children }
</_Grid>;

export default Grid
