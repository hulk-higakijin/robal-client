import deleteUser from "service/user/deleteUser";

type InitialProps = {
  handleOnClick: (index: number) => void;
  activeIndex:   number;
};

const SettingsMenu = ({ handleOnClick, activeIndex }: InitialProps) => {
  const menuLists = [
    { id: 1, title: "My Profile", clickEvent: () => handleOnClick(1) },
    { id: 2, title: "My Jobs",    clickEvent: () => handleOnClick(2) },
    { id: 3, title: "Saved Jobs", clickEvent: () => handleOnClick(3) },
  ];

  return (
    <div className="box-nav-tabs nav-tavs-profile mb-5">
      <ul className="nav" role="tablist">
        {menuLists.map((menu, index) => (
          <li key={index}>
            <a
              className={`btn btn-border aboutus-icon mb-20 ${activeIndex == menu.id && 'active'} `}
              onClick={menu.clickEvent}
            >
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="border-bottom pt-10 pb-10" />
      <div className="mt-20 mb-20">
        <p
          className="link-red"
          onClick={() => deleteUser()}
          style={{ cursor: "pointer" }}
        >
          Delete Account
        </p>
      </div>
    </div>
  );
};

export default SettingsMenu;
