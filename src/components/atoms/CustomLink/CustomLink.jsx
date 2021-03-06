import styled from "styled-components" ;
import { Link } from "react-router-dom";
 
const CustomLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : "black")};
  ${(props) =>
    props.removeunderline === "yes" ? "text-decoration: none;" : ""}
`;
export default CustomLink;
