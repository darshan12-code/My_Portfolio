import styled, { keyframes } from 'styled-components';
import { Pencil, Trash2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CategoryBadge from '../ui/CategoryBadge';

const AdminContentCard = ({ item, tab, onEdit, onDelete ,onMessageClick}) => {
  const previewText = (text = '') =>
    text.replace(/<[^>]+>/g, '').slice(0, 130) + (text.length > 130 ? '…' : '');

  const categories = (item.category || '')
    .split(',').map(c => c.trim()).filter(Boolean);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.07}
      glareColor="#3B82F6"
      scale={1.02}
      transitionSpeed={500}
      style={{ borderRadius: '14px', transformStyle: 'preserve-3d', height: '100%' }}
    >
      <Card  $clickable={tab === 'messages'}
  onClick={tab === 'messages' ? () => onMessageClick(item) : undefined}>
        <CardShimmerBar />

        <CardHeader>
          <CardTitle>{item.title || item.name || '(no title)'}</CardTitle>
          {tab !== 'messages' && (
            <CardActions>
              <IconBtn type="button" onClick={() => onEdit(item)} title="Edit">
                <Pencil size={13} />
              </IconBtn>
              <IconBtn type="button" $danger onClick={() => onDelete(item.id)} title="Delete">
                <Trash2 size={13} />
              </IconBtn>
            </CardActions>
          )}
        </CardHeader>

        <CardBody>
          {(tab === 'blogs' || tab === 'cases') && (
            <>
              <ChipsRow>
                {categories.slice(0, 2).map((cat, i) => (
                  <CategoryBadge key={i} category={cat} size="sm" />
                ))}
                {categories.length > 2 && (
                  <CategoryBadge category={`+${categories.length - 2}`} size="sm" />
                )}
              </ChipsRow>
              <CardPreview>
                {tab === 'blogs'
                  ? previewText(item.excerpt || item.content)
                  : previewText(item.summary)
                }
              </CardPreview>
            </>
          )}

          {tab === 'messages' && (
            <>
              <EmailChip>{item.email}</EmailChip>
              <CardPreview>{previewText(item.message)}</CardPreview>
            </>
          )}
        </CardBody>

        {tab !== 'messages' && (
          <CardStatusRow>
            <StatusDot $on={item.is_published} />
            <span>{item.is_published ? 'Published' : 'Draft'}</span>
          </CardStatusRow>
        )}
      </Card>
    </Tilt>
  );
};

export default AdminContentCard;

/* ── Styles ── */

const shimmerMove = keyframes`
  0%   { background-position: -200% 0 }
  100% { background-position:  200% 0 }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  display: flex;
  flex-direction: column;
  height: 100%;

  /* ── fixed minimum height so short cards don't look tiny ── */
  min-height: 200px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCardHover};
    transform: translateY(-2px);
  }
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};

  ${({ $clickable, theme }) => $clickable && `
    &:hover {
      border-color: ${theme.colors.accentBlueBorder};
      box-shadow: 0 8px 32px rgba(59, 130, 246, 0.12);
    }
  `}
`;

const CardBody = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
`;

const CardTitle = styled.h3`
  font-size: 0.93rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
 
  min-height: calc(1.3em * 1);
`;

const CardPreview = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.82rem;
  line-height: 1.5;
  margin: 0.5rem 0 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;

  min-height: calc(1.5em * 2);
  & * { display: inline; }
`;

const CardShimmerBar = styled.div`
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: ${({ theme }) => theme.colors.gradientShimmer};
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.3s;
  animation: ${shimmerMove} 2.5s linear infinite;
  ${Card}:hover & { opacity: 1; }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;



const CardActions = styled.div`
  display: flex;
  gap: 5px;
  flex-shrink: 0;
`;

const IconBtn = styled.button`
  border: none;
  background: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDangerBg : theme.colors.bgGlassLight};
  color: ${({ $danger, theme }) =>
    $danger ? theme.colors.accentDanger : theme.colors.textSecondary};
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  &:hover {
    background: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerBgHover : theme.colors.borderHover};
    color: ${({ $danger, theme }) =>
      $danger ? theme.colors.accentDangerLight : '#fff'};
    transform: scale(1.1);
  }
`;



const ChipsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  margin-bottom: 6px;
  overflow: hidden;
`;

const EmailChip = styled.span`
  display: inline-block;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  margin-bottom: 6px;
  background: ${({ theme }) => theme.colors.accentBlueBg};
  border: 1px solid ${({ theme }) => theme.colors.accentBlueBorder};
  color: ${({ theme }) => theme.colors.accentBlue};

  /* ── prevent long emails from breaking layout ── */
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;



const blinkAnim = keyframes`0%,100%{opacity:1}50%{opacity:0.3}`;

const CardStatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.85rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderDefault};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const StatusDot = styled.span`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: ${({ $on, theme }) => $on ? theme.colors.accentGreen : theme.colors.textTertiary};
  animation: ${({ $on }) => $on ? blinkAnim : 'none'} 2.5s ease-in-out infinite;
`;

const TiltWrap = styled(Tilt)`
  height: 100%;
  display: block;
  border-radius: 14px;
  transform-style: preserve-3d;
`;
