import Tag from './Tag';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

// tags — comma-separated string OR array of strings
// max  — slice to first N tags (default: show all)
const TagList = ({ tags, max }) => {
  const arr = Array.isArray(tags)
    ? tags
    : (tags || '').split(',').map(t => t.trim()).filter(Boolean);

  const shown = max ? arr.slice(0, max) : arr;
  const extra = max ? arr.length - max : 0;

  return (
    <Row>
      {shown.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
      {extra > 0 && <Tag>+{extra}</Tag>}
    </Row>
  );
};

export default TagList;