import AboutItemEnhancementDocs from '@/components/AboutItemEnhancementDocs';
import FilterEnhancementDocs from '@/components/FilterEnhancementDocs';
import ReviewLinkIssue from '@/components/ReviewLinkIssue';
import React from 'react';

export default function Product() {
  return (
    <>
      <ReviewLinkIssue />
      <FilterEnhancementDocs />
      <AboutItemEnhancementDocs />
    </>
  );
}
