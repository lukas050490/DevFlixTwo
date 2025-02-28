import styled from "styled-components"

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  height: 200px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.changeBackground ? "#000" : "transparent"};
  transition: background-color 1s ease-in-out;


  img {
    width: 25%;
  }

`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`
export const Li = styled.li`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a{
    text-decoration: none;
    color: #ffffff;
  }

  &::before {
    content: "";
    height: 3px;
    width:  ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;

  }

  &:hover::after {
    width: 100%
  }
`