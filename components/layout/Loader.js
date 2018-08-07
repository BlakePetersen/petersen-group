import React from 'react'

import styled from 'styled-components'

const _Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const Loader = () => (
  <_Loader className='loader'>
    <style jsx>{`

    `}</style>
  </_Loader>
);

export default Loader
