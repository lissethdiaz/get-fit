import React, { Component } from 'react';
import axios from 'axios';

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      name: '',
      duration: 0,
      distance: '',
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/exercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          name: response.data.name,
          duration: response.data.duration,
          distance: response.data.distance,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:3001/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  
  onChangeDistance(e) {
    this.setState({
      distance: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      name: this.state.name,
      duration: this.state.duration,
      distance: this.state.distance,
      date: this.state.date,
    };

    console.log(exercise);

    axios.post('http://localhost:3001/exercises/update/'+this.props.match.params.id, exercise)
      .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Name: </label>
            <input 
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}>
            </input>
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group"> 
            <label>Distance: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.distance}
                onChange={this.onChangeDistance}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <input  type="text"
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
              />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Exercise Log" className="btn btn-dark" />
          </div>
        </form>
      </div>
    )
  }
}