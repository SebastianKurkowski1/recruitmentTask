import styled from 'styled-components'
import { useFormik } from 'formik'
import { registrationSchema } from '../../../../schemas/registrationSchema'
import './form.css'
import { RegistrationFormDataInterface } from '../../../../interfaces/RegistrationFormDataInterface'
import { StarWarsDataType } from '../../../../types/StarWarsDataType'
import { ReactNode } from 'react'

const CustomInput = styled('input')`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`

const ErrorMessageInput = styled('span')`
  color: #FF0000;
  font-size: 20px;
  line-height: 33px;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 300;
  right: 0;
  white-space: nowrap;
  display: block;
  text-align: right;
`
const SubmitButton = styled('button')`
  max-width: 224px;
  width: 100%;
  height: 55px;
  font-family: 'Lato', sans-serif;
  border-radius: 20px;
  background-color: #071594;
  color: #FFFFFF;
  font-size: 30px;
  font-style: italic;
  cursor: pointer;
  -webkit-text-stroke: 1px #D9D9D9;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  font-weight: 400;
  white-space: nowrap;
`

const CheckboxError = styled('span')`
  margin-left: 45px;
  color: #FF0000;
  font-size: 20px;
  line-height: 33px;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 300;
`

interface Props {
  star_wars_data: StarWarsDataType
}

async function postData (url = '', data = {}): Promise<void> {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export default function Form (props: Props): ReactNode {
  const onSubmit = async (values: RegistrationFormDataInterface): Promise<void> => {
    const data = [{ ...values }, { ...props }]
    await postData('https://swapi.dev/api/people/1/', data)
  }

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: {
      login: '',
      password: '',
      email: '',
      phoneNumber: '',
      rules: false
    },
    validationSchema: registrationSchema,
    onSubmit
  })

  return (
        <form style={{ marginTop: '55px' }} autoComplete={'off'} onSubmit={handleSubmit}>
            <label>
                Login:
                <CustomInput
                    value={values.login}
                    id={'login'}
                    type={'text'}
                    name={'login'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={((errors?.login) != null) && (touched.login === true) ? 'inputError' : ''}
                />
                <ErrorMessageInput
                    className={(errors.login != null) && (touched.login === true) ? '' : 'hidden'}>
                    {(errors.login != null) ? errors.login : 'dummy'}
                </ErrorMessageInput>
            </label>
            <label>
                Has??o:
                <CustomInput
                    value={values.password}
                    id={'password'}
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={(errors.password != null) && (touched.password === true) ? 'inputError' : ''}
                />
                <ErrorMessageInput
                    className={(errors.password != null) && (touched.password === true) ? '' : 'hidden'}>
                    {(errors.password != null) ? errors.password : 'dummy'}
                </ErrorMessageInput>
            </label>
            <label>
                E-mail:
                <CustomInput
                    value={values.email}
                    id={'email'}
                    type={'text'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={(errors.email != null) && (touched.email === true) ? 'inputError' : ''}
                />
                <ErrorMessageInput
                    className={(errors.email != null) && (touched.email === true) ? '' : 'hidden'}>
                    {(errors.email != null) ? errors.email : 'dummy'}
                </ErrorMessageInput>
            </label>
            <label>
                Numer telefonu:
                <CustomInput
                    value={values.phoneNumber}
                    id={'phoneNumber'}
                    type={'number'}
                    name={'phoneNumber'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={(errors.phoneNumber != null) && (touched.phoneNumber === true) ? 'inputError' : ''}
                />
                <ErrorMessageInput
                    className={(errors.phoneNumber != null) && (touched.phoneNumber === true) ? '' : 'hidden'}>
                    {(errors.phoneNumber != null) ? errors.phoneNumber : 'dummy'}
                </ErrorMessageInput>
            </label>
            <label style={{ marginTop: '15px' }} className="checkboxContainer">Akceptuj?? regulamin
                <input
                    type="checkbox"
                    checked={values.rules}
                    id={'rules'}
                    name={'rules'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <span className={(errors.rules != null) && (touched.rules === true) ? 'checkboxError checkmark' : 'checkmark'}></span>
                <CheckboxError>{(errors.rules != null) ? errors.rules : ''}</CheckboxError>
            </label>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '27px' }}>
                <SubmitButton type={'submit'} disabled={isSubmitting}>
                    zapisz
                </SubmitButton>
            </div>
        </form>
  )
}
