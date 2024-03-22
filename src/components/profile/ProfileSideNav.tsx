// import Image from 'next/image';
// import Link from 'next/link';

export default function ProfileSideNav() {
  return (
    <>
      <ul className="menu bg-slate-100 rounded-box">
        {/* <li>
        <a>Dashboard</a>
      </li> */}
        <li>
          <details open>
            <summary>My Network</summary>
            <ul>
              <li>
                <a>Followers</a>
              </li>
              <li>
                <a>Following</a>
              </li>
              <li>
                <a>Suggested</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>Notifications</a>
        </li>
        <li>
          <a>Library</a>
        </li>
        <li>
          <a>Edit Profile</a>
        </li>
      </ul>
      <button className="btn btn-accent w-full mt-8" disabled-off>
        Create Post
      </button>
    </>
  );
}
