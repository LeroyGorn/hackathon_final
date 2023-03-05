import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../common/AuthButton";
import * as Styled from "../../styles/projects.styled";
import { IUserCardProps } from "../../types/userCard.types";

const UserCard = ({
  id,
  education,
  years_experience,
  name,
  experience,
  user_stack,
}: IUserCardProps) => {
  return (
    <Styled.CardWrapper>
      <h2 className="user-name">{name}</h2>
      <p className="user-experience">
        <span className="bold-text">Description: </span>
        {experience}
      </p>

      <p className="user-experience">
        <span className="bold-text">Education: </span>
        {education}
      </p>
      <div className="bottom-wrapper">
        <p>
          <span className="bold-text">User Stack: </span>
          {user_stack.map((item, idx) => (
            <span key={idx}>
              {item}
              {idx !== user_stack.length - 1 && "/"}
            </span>
          ))}
          <span className="bold-text experience"> Experience: </span>
          {years_experience === 0
            ? " Without any experience"
            : `${" "}${years_experience} yrs`}
        </p>
        <Link to={`/cv?userId=${id}`}>
          <AuthButton type="button" title="CV" />
        </Link>
      </div>
    </Styled.CardWrapper>
  );
};

export default UserCard;
