export default {
  picture: '',
  cropped_picture: '',
  session: false,
  jwt: '',
  options: {
    auto: 'none',
    fields: {
      email: {
        label: 'Email',
        placeholder: 'jean@louis.com',
        error: 'Email format is not valid',
        keyboardType: 'email-address'
      },
      password: {
        label: 'Password',
        placeholder: 'passw@rd',
        error: 'Password must be at least 5 characters long',
        password: true,
        secureTextEntry: true
      }
    }
  }
}
