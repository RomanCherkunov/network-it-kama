import Preloader from '../../common/preloader/Preloader'
import classes from '../Main.module.css'
import ProfileStatus from './ProfileStatus'

const Profile = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

  return (
    <div className={classes.block}>
        <div className={classes.avatar}>
            <img src={props.profile.photos.large} alt="ava"/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
        <div className={classes.about}>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob ? 'Ищу работу' : null}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.vk}</div>

        </div>
    </div>
  )
}
  
export default Profile