import styled from "styled-components";

const StyleTable = styled.table`
  width: 100%;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: 0.8rem;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
`;

const Table = (props) => {
  return <StyleTable {...props} />;
};

export default Table;
