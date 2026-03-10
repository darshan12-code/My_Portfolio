import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";
import { getCategoryColor } from "../../utils/categoryColors";
import { useNavigate } from "react-router-dom";

/* ---------- Badge ---------- */

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $colors }) => $colors.bg};
  border: 1px solid ${({ $colors }) => $colors.border};
  color: ${({ $colors }) => $colors.text};
`;

/* ---------- Card ---------- */

const CardLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem;
  min-height: 240px;

  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  cursor: pointer;
  position: relative;
  overflow: hidden;

  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.25s ease;

  /* gradient top bar */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;

    background: linear-gradient(90deg, #ff2d6b 0%, #3b82f6 100%);

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.35);

    &::before {
      transform: scaleX(1);
    }
  }

  /* responsive height */
  @media (max-width: 768px) {
    min-height: 210px;
  }

  @media (max-width: 480px) {
    min-height: auto;
  }
`;

/* ---------- Meta ---------- */

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};

  margin-bottom: 0.75rem;
`;

/* ---------- Title ---------- */

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.textPrimary};

  margin-bottom: 0.4rem;

  /* limit title lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ---------- Excerpt ---------- */

const Excerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;

  margin-bottom: 0.75rem;

  /* limit text lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* ---------- Date ---------- */

const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

/* ---------- Bottom Row ---------- */

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* ---------- Arrow ---------- */

const ArrowChip = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.35rem 0.85rem;

  border-radius: 999px;

  font-size: 0.78rem;
  font-weight: 600;

  background: linear-gradient(
    90deg,
    rgba(255, 45, 107, 0.12),
    rgba(59, 130, 246, 0.12)
  );

  border: 1px solid rgba(255, 45, 107, 0.2);

  color: ${({ theme }) => theme.colors.gradientPinkBlue};
`;

/* ---------- Component ---------- */

const BlogCard = ({ post }) => {
  const navigate = useNavigate();
  const colors = getCategoryColor(post.category);

  return (
    <CardLink
      onClick={() => navigate(post.link)}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div>
        <Meta>
          <CategoryBadge $colors={colors}>
            {post.category}
          </CategoryBadge>
          <span>·</span>
          <span>{post.readTime}</span>
        </Meta>

        <Title>{post.title}</Title>

        <Excerpt>{post.excerpt}</Excerpt>
      </div>

      <Footer>
        <Date>{post.date}</Date>

        <ArrowChip whileHover={{ x: 4 }}>
          Read more →
        </ArrowChip>
      </Footer>
    </CardLink>
  );
};

export default React.memo(BlogCard);