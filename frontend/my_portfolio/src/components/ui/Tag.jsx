import styled from 'styled-components';
const TagPill = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  letter-spacing: 0.02em;
  background: ${({ theme }) => theme.colors.techGradientSubtle};
  border: 1px solid ${({ theme }) => theme.colors.techBorder};

  /* gradient text on the span inside */
  span {
    background: ${({ theme }) => theme.colors.techGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
// const TagPill = styled.span`
//   display: inline-block;
//   padding: 3px 10px;
//   border-radius: 6px;
//   font-size: ${({ theme }) => theme.fontSizes.xs};
//   font-family: ${({ theme }) => theme.fonts.mono};
//   font-weight: 500;
//   background: linear-gradient(
//     90deg,
//     ${({ theme }) => theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.22) 0%, rgba(59,130,246,0.22) 100%'
//       : 'rgba(232,23,74,0.13) 0%, rgba(29,78,216,0.13) 100%'
//     }
//   );
//   border: 0.5px solid ${({ theme }) =>
//     theme.mode === 'dark'
//       ? 'rgba(255,45,107,0.28)'
//       : 'rgba(232,23,74,0.22)'
//   };
//   color: ${({ theme }) => theme.mode === 'dark' ? '#ffffff' : '#1A1A2E'};
// `;
const Tag = ({ children }) => <TagPill><span>{children}</span></TagPill>;
export default Tag;