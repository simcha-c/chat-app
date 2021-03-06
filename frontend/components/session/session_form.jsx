import React from 'react';
import SwitchSession from './switch_session'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit() {
    event.preventDefault();
    this.props.handleSubmit(this.props.modal, this.state)
      .then(this.props.closeModal);
  }

  clearState() {
    return (cb) => {
      this.setState({username: '', password: ''}, cb);
    };
  }

  render() {
    const errors = this.props.errors;
    const loginErrors = errors.login;
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <section className="session-info">
          <h1>{this.props.modal}</h1>
          <p className={`session-label ${errors.username || loginErrors ? 'session-error' : ''}`}>{loginErrors}</p>
          <label 
            className={`session-label ${errors.username || loginErrors ? 'session-error' : ''}`}>
            Username:
          </label>
          <input
            className={`session-input ${errors.username || loginErrors ? 'session-error' : ''}`}
            type="text" 
            onChange={this.handleChange('username')} 
            value={this.state.username}/>
          <p className="session-errors">{errors.username}</p>

          <label
            className={`session-label ${errors.password || loginErrors ? 'session-error' : ''}`}>
            Password:
          </label>
          <input 
            className={`session-input ${errors.password || loginErrors ? 'session-error' : ''}`}
            type="password" 
            onChange={this.handleChange('password')} 
            value={this.state.password}/>
          <p className="session-errors">{errors.password}</p>

          <input className="session-submit" type="submit" value={this.props.modal}/>
          <SwitchSession modal={this.props.modal} clearState={this.clearState()} openModal={this.props.openModal}></SwitchSession>
        </section>
      </form>
          )
  }
}

export default SessionForm;