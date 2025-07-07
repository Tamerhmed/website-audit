import CardsList from '@/components/CardsList';
import MobileDiscountBanner from '@/components/MobileDiscountBanner';
import WishlistButtonIssue from '@/components/WishingListButtonIssue';
import React from 'react';

export default function DiscountPage() {
  return (
    <div>
      <MobileDiscountBanner />
      <CardsList />
      <WishlistButtonIssue />
    </div>
  );
}
