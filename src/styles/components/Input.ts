import { transparent, black } from '../colors'
import { styled } from 'linaria/react'

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 93px;
`

export const Input = styled.input`
  border-radius: 18px;
  font-size: 16px;
  line-height: 2;
  background-color: ${transparent};
  ::placeholder {
    color: ${black};
    font-family: '나눔스퀘어라운드', sans-serif;
  }

  :-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }
`
