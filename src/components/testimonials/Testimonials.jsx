import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Sushant Raj",
      title: "Flutter Developer",
      icon: "assets/twitter.png",
      desc:
        "This team is very motivated and dedicated to work on the project. They are very good at what they do and I would recommend them to anyone who is looking for a team to work on a project."
    },
    {
      id: 2,
      name: "Sandeep Sharma",
      title: "React Native Developer",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHcwBmKnVmn2w/profile-displayphoto-shrink_800_800/0/1631517680770?e=1645660800&v=beta&t=NGKVionZyVpXji324gPO-_lxgfVdyp1m-3H2xtxFLzo",
      icon: "assets/linkedin.png",
      desc:
        "This team is very motivated and dedicated to work on the project. They are very good at what they do and I would recommend them to anyone who is looking for a team to work on a project. ",
      featured: true,
    },
    {
      id: 3,
      name: "Shadab Hassan",
      title: "Frontend Developer",
      
      icon: "assets/linkedin.png",
      img:"",
      desc:
        "This team is very motivated and dedicated to work on the project. They are very good at what they do and I would recommend them to anyone who is looking for a team to work on a project",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Team</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
