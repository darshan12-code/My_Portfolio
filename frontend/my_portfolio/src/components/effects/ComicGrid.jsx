// src/components/effects/ComicGrid.jsx
import styled from 'styled-components';

const Grid = styled.div`
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.inkStroke} 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center center;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
`;

/* Larger panel divider lines — like actual comic panel borders */
const PanelLines = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.comicPanel} 2px, transparent 2px);
  background-size: 320px 320px;
`;

const ComicGrid = () => (
  <>
    <Grid />
    <PanelLines />
  </>
);

export default ComicGrid;