
import './App.css';

function App() {
  return (
    <>
    <div className='container'>
      <h2 className='signin-title'>Sign in</h2>
      <form className='signin-form'>
        <div>
          <label for="name">First Name</label>
          <input
            id='name'
            type='text'
            placeholder='Bill'
            name='name'
            required
          />
        </div>

        <div>
          <label for="name">Last Name</label>
          <input
            id='name'
            type='text'
            placeholder='Buruk'
            name='name'
            required
          />
        </div>

        <div>
          <label for="email">Email</label>
          <input
            id='email'
            type='email'
            placeholder='me@example.com'
            name='email'
            required
          />
        </div>

        <div>
          <label for="password">Password</label>
          <input
            id='password'
            type='password'
            placeholder='password'
            name='password'
            required
          />
        </div>

        <button className='btn btn--form' type='submit' value="Log in">Sign in</button>
      </form>
    </div>
    </>
    
    
  );
}

export default App;
