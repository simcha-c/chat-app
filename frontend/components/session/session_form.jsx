import React from 'react';

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

  render() {
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <h1>{this.props.modal}</h1>
        <section className="session-info">
          <label className="session-label">Username:</label>
          <input
            className="session-input"
            type="text" 
            onChange={this.handleChange('username')} 
            value={this.state.username}/>

          <label className="session-label">Password:</label>
          <input 
            className="session-input"
            type="password" 
            onChange={this.handleChange('password')} 
            value={this.state.password}/>
        </section>

        <input className="session-submit" type="submit" value={this.props.modal}/>
      </form>
    )
  }
}

export default SessionForm;