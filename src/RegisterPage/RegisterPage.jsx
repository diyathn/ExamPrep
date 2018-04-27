import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                school: '',
                grade: '',
                subject: {
                  category: '',
                  selection: ''
                } ,
                email: '',
                phoneNumber: '',
                password:''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
        console.log(user);
    }

    handleRadioChange(event,id) {

      if (id === "ol") {
        this.setState({
          checked: false

        })
      } else {
        this.setState({
          checked: true

        })
      }
      const { name, value } = event.target;
      var valueObj = {  category: id,
                        selection: value
                     }

      const { user } = this.state;

      this.setState({
          user: {
              ...user,
              [name]: valueObj
          }
      });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;

        if (user.name && user.school && user.grade && user.subject && user.email && user.phoneNumber && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const hidden = this.state.checked ? '' : 'hidden';
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
                        {submitted && !user.name &&
                            <div className="help-block">Your Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.school ? ' has-error' : '')}>
                        <label htmlFor="school">School</label>
                        <input type="text" className="form-control" name="school" value={user.school} onChange={this.handleChange} />
                        {submitted && !user.school &&
                            <div className="help-block">Your school is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.grade ? ' has-error' : '')}>
                        <label htmlFor="grade">Grade</label>
                        <br/>
                        <select  className="form-control" name="grade" value={user.grade} onChange={this.handleChange}>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                          <option value="6">Six</option>
                          <option value="7">Seven</option>
                          <option value="8">Eight</option>
                          <option value="9">Nine</option>
                          <option value="10">Ten</option>
                          <option value="11">Eleven</option>
                          <option value="12">Twelve</option>
                          <option value="13">Thirteen</option>
                        </select>
                        {submitted && !user.grade &&
                            <div className="help-block">Your grade is required</div>
                        }
                    </div>
                    <div>
                    <label htmlFor="grade">Subject</label>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={'form-group' + (submitted && !user.subject ? ' has-error' : '')} style={{marginRight: '100px'}}>
                        <label htmlFor="ol">
                        <input type="radio" className="form-control" name="subject" value="ol" onChange={(e)=>this.handleRadioChange(e,"ol")} />
                          O/L
                        </label>
                        {submitted && !user.subject &&
                            <div className="help-block">Your subject is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.subject ? ' has-error' : '')} style={{marginRight: '100px'}}>
                        <label htmlFor="al">
                        <input type="radio" className="form-control" name="subject" value="please select" onChange={(e)=> this.handleRadioChange(e,"")} />
                          A/L
                        </label>
                        {submitted && !user.subject &&
                            <div className="help-block">Your subject is required</div>
                        }
                        <div className={ hidden }>
                        <select  className="form-control" name="subject" onChange={(e)=> this.handleRadioChange(e,"al")}>
                          <option value="bio">Biology</option>
                          <option value="maths">Combine Maths</option>
                          <option value="commerce">Commerce</option>
                          <option value="arts">Arts</option>
                        </select>
                        </div>
                    </div>
                  </div>
                  </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Your email address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.phoneNumber ? ' has-error' : '')}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="phoneNumber" className="form-control" name="phoneNumber" value={user.phoneNumber} onChange={this.handleChange} />
                        {submitted && !user.phoneNumber &&
                            <div className="help-block">Your phone number is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                  </form>
                  </div>

        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
