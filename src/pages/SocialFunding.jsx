import React from 'react';

export default function SocialFunding() {
  console.log("Entered SocialFunding page");
  return (
    <div className="h-full box-border">
      <h1 className="text-2xl font-bold mb-4">Social Funding</h1>
      <p>
        This feature will allow traders to create or join group funding pools, 
        rotating payouts, and keep track of repayment schedules. 
        Future upgrades might include real-time updates and collaboration.
      </p>
    </div>
  );
}