// src/components/NavLinkWithTooltip.tsx
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import * as LucideIcons from 'lucide-react';
import type { NavLink } from '@/types';

export function NavLinkWithTooltip({ href, label, tooltipContent, iconName }: NavLink) {
  const IconComponent = iconName ? (LucideIcons[iconName] as React.ElementType) : null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a href={href} className="flex items-center gap-2 border-b-2 border-transparent hover:border-b-white transition-colors ">
          {IconComponent && <IconComponent className="w-5 h-5" />}
        </a>
      </TooltipTrigger>
      {tooltipContent && (
        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
}