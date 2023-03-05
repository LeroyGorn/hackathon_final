import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../common/AuthButton";
import { showUser } from "../../redux/slices/user-slice";
import * as Styled from "../../styles/profile.styled";

const TopProfileSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/createcv");
  };

  const data = useSelector(showUser);

  return (
    <Styled.TopSection>
      {/* <div className='content-wrapper'> */}
      <div className="heading-wrapper">
        <h2 className="title">Hi, {data.first_name}</h2>
        <Link to={"/createcv"}>
          <AuthButton type="button" title="Create your CV" />
        </Link>
      </div>
      <p className="description">
        Welcome to your user profile page! This is where you can showcase your
        skills, experience, and contributions to the community. Update your
        profile picture and bio to introduce yourself to other members. You can
        also add your skills and areas of expertise to help others find you when
        searching for teammates. Keep track of your projects and contributions
        using our built-in tools, and connect with other members by sending
        messages and joining teams. Your user profile is your gateway to the
        community, so make sure to keep it up-to-date and engaging!
      </p>
      {/* </div> */}
      {/* title='Create your CV' / title='Your CV' */}
    </Styled.TopSection>
  );
};

export default TopProfileSection;
