import * as yup from 'yup'

const phoneRegExp = /^\d{9}$/

export const registrationSchema = yup.object().shape({
  login: yup.string().required('Podaj login'),
  password: yup.string().required('Podaj hasło'),
  email: yup.string().email('Nieprawidłowy format adresu e-mail').required('Podaj e-mail'),
  phoneNumber: yup.string().matches(phoneRegExp, 'Nieprawidłowy numer telefonu').required('Podaj numer telefonu'),
  rules: yup.boolean().oneOf([true], 'Wymagana akceptacja regulaminu')
})
