const ProfileHeader = ({ name }) => <h2>{name}</h2>;
const ProfileBody = ({ bio }) => <p>{bio}</p>;
const ProfileFooter = ({ socialLinks }) => (
  <ul>
    {socialLinks.map((link) => (
      <li key={link}>{link}</li>
    ))}
  </ul>
);

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <ProfileHeader name={user.name} />
      <ProfileBody bio={user.bio} />
      <ProfileFooter socialLinks={user.socialLinks} />
    </div>
  );
};

export default ProfileCard;
