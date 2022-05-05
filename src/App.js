import './App.css';

const { faker } = require('@faker-js/faker');

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className='avatar'>
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className='author'>
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className='date'>Today at 6.00pm</span>
          </div>
          <div className="text">Excellent!!! Keep it up</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className='avatar'>
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className='author'>
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className='date'>Today at 6.00pm</span>
          </div>
          <div className="text">Excellent!!! Keep it up</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className='avatar'>
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className='author'>
            {faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className='date'>Today at 6.00pm</span>
          </div>
          <div className="text">Excellent!!! Keep it up</div>
        </div>
      </div>
    </div>
  );
}

export default App;
