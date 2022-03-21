import classes from '../Main.module.css'
import  React  from 'react';

class ProfileStatus extends React.Component  {


    state = {
        editMode: false,
        status: this.props.status 
    }

    activateEditMode =  () => {
        this.setState({
            editMode: true
        })
    }

    DeactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
      
    }

render() {
      return (
    <div>
        {!this.state.editMode &&
            <div className={classes.status}>
    
                <span onDoubleClick={() => this.activateEditMode()}>{this.props.status || '-------'}</span>
            </div>
        }
        {this.state.editMode &&
            <div className={classes.status}>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => this.DeactivateEditMode()} value={this.state.status}></input>
            </div>
        }
    </div>
  )
}
}

  
export default ProfileStatus