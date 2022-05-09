import './App.css';
import Comment from './components/Comment';
import Card from './components/Card';
import Field from './components/Field';
import Languages from './components/Languages';
import Translate from './components/Translate';

const { faker } = require('@faker-js/faker');

function App() {
  return (
    <div className="ui container comments">
      <Card>
        <Comment author={faker.name.firstName()} userImage={faker.image.avatar()} />
      </Card>
      <Card>
        <Comment author={faker.name.firstName()} userImage={faker.image.avatar()} />
      </Card>
      <Card>
        <Comment author={faker.name.firstName()} userImage={faker.image.avatar()} />
      </Card>
      <Field />
      <Languages />
      <Translate />
    </div>
  );
}

export default App;
