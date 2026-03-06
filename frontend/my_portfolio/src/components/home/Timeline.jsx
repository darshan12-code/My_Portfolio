import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';
import { experience } from '../../data/siteData';
import { media } from '../../../media';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 4rem;
  max-width: 1100px;
  margin: 0 auto;
  ${media.tablet} { padding: ${({ theme }) => theme.spacing.section} 2rem; }
`;

const List = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0; bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.borderDefault};

    ${media.tablet} { left: 20px; }
  }
`;

const Item = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    ${media.tablet} { flex-direction: row; text-align: left; }
  }

  ${media.tablet} {
    padding-left: 3rem;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 2.5rem;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentPink};
  box-shadow: ${({ theme }) => theme.colors.shadowGlowPink};
  transform: translateX(-50%);

  ${media.tablet} { left: 20px; }
`;

const Card = styled.div`
  flex: 1;
  max-width: 45%;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  ${media.tablet} { max-width: 100%; }
`;

const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;
const Company = styled.span`
  color: ${({ theme }) => theme.colors.accentPink};
  font-weight: 600;
`;
const Period = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin: 0.25rem 0 0.75rem;
`;
const Desc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 0.75rem;
`;
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 0.5rem;`;

const Timeline = () => (
  <Section>
    <SectionHeader number="03" title="EXPERIENCE" />
    <List>
      {experience.map((exp, i) => (
        <Item
          key={exp.id}
          initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Dot />
          <Card>
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company> · {exp.location}
            <Period>{exp.period}</Period>
            <Desc>{exp.description}</Desc>
            <Tags>{exp.tech.map((t) => <Tag key={t}>{t}</Tag>)}</Tags>
          </Card>
          <div style={{ flex: 1 }} />
        </Item>
      ))}
    </List>
  </Section>
);

export default Timeline;