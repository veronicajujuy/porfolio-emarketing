/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CampaignCopy {
  id: string;
  title: string;
  copyText: string;
  justification: string;
  alternativeSuggestion: string;
  channel: 'Instagram' | 'Facebook' | 'Ambos';
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

export interface BrandBrief {
  name: string;
  tagline: string;
  channels: string[];
  rubro: string;
  location: string;
  valueProposition: string;
  targetAudience: {
    description: string;
    details: string[];
  };
  communicationTone: {
    voice: string;
    description: string;
    dos: string[];
    donts: string[];
  };
}

export interface MarketerProfile {
  name: string;
  title: string;
  location: string;
  bio: string;
  skills: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}
