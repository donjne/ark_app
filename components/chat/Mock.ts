'use client'
export interface PAO {
    id: string;
    name: string;
    lastMessage?: string;
    governanceType: GovernanceType;
}

export type GovernanceType = 'Absolute-Monarchy' | 'Sociocracy' | 'Military-Junta' | 'Conviction' | 'Polycentric' | 'Flat' | 'Sortition';

  
  export const mockPAOs: PAO[] = [
    { id: "tx1", name: "EcoDAO", governanceType: "Conviction", lastMessage: "New proposal: Solar Panel Initiative" },
    { id: "tx2", name: "TechPAO", governanceType: "Absolute-Monarchy", lastMessage: "Voting ends in 2 hours" },
    { id: "tx3", name: "ArtCollective", governanceType: "Flat", lastMessage: "Fund allocation approved" },
  ];