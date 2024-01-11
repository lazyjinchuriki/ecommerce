import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const StyledTab = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  ${props =>
    props.active
      ? `
    color:black;
    border-bottom: 2px solid black;
  `
      : `
    color:#999;
  `}
`;

export default function Tabs({ tabs, active, onChange }) {
  return (
    <StyledTabs>
      {tabs.map((tabName, index) => (
        <StyledTab
          key={index} // Add key prop with a unique value
          onClick={() => {
            onChange(tabName);
          }}
          active={tabName === active}
        >
          {tabName}
        </StyledTab>
      ))}
    </StyledTabs>
  );
}

