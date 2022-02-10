import Preloader from '../../common/preloader/Preloader'
import classes from '../Main.module.css'

const Profile = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

  return (
    <div className={classes.block}>
        <div className={classes.avatar}>
            <img src={props.profile.photos.large} alt="ava"/>
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