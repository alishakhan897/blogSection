// Write your JS code here
import './index.css'

const UserInfo = () => {
  return (
    <div className="user-div">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="profile"
        />
        <h1 className="user-name">Wade Warren</h1>
        <p className="user-para">Software Developer at UK </p>
      </div>
    </div>
  )
}
export default UserInfo
