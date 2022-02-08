import styled from 'styled-components'

export const MovieItemContainer = styled.div``

export const Thumbnail = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 1200px) {
    width: 254px;
    height: 170px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 35px;
  border: none;
  align-items: center;
  margin-right: 30px;
  outline: none;
  cursor: pointer;
`

export const MoviePlayerContainer = styled.div`
  display:flex;
  flex-direction:column:
  justify-content:center;
  align-items:center;
  height:100%;
`
