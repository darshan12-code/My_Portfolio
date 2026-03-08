import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
const Card = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.colors.shadowCard};
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: 0.75rem;
`;

const CategoryBadge = styled.span`
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 600;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 0.75rem;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ReadMoreLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 600;
  text-decoration: underline;
`;

const BlogCard = ({ post }) => (
  <Card
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Meta>
      <CategoryBadge>{post.category}</CategoryBadge>
      <span>·</span>
      <span>{post.readTime}</span>
    </Meta>
    <Title>{post.title}</Title>
    <Excerpt>{post.excerpt}</Excerpt>
    <Date>{post.date}</Date>
    <ReadMoreLink to={post.link}>Read More →</ReadMoreLink>
  </Card>
);


export default React.memo(BlogCard);