'use client';
import { Menu as MenuIcon } from 'lucide-react';
import { useTheme } from '@/lib/themeContext';
import { cn } from '@/lib/utils';

type Props = {
  onOpenMenu: () => void;
  title?: string;
  githubOwner?: string;
  githubRepo?: string;
  className?: string;
  onOpenModelsModal?: () => void;
  showCompareButton?: boolean;
  hideHomeButton?: boolean;
};

export default function HeaderBar({
  onOpenMenu,
  className,
}: Props) {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  return (
    <div className={['flex items-center mb-1 gap-2 w-full', className || ''].join(' ')}>
      <div className="flex items-center gap-2 min-w-0">
        <button
          onClick={onOpenMenu}
          className={cn(
            "lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl backdrop-blur-sm shadow-lg transition-all duration-200 hover:scale-105 active:scale-95",
            isDark
              ? "bg-gradient-to-r from-white/12 to-white/8 border border-white/15 text-white hover:from-white/18 hover:to-white/12 hover:border-white/25"
              : "bg-white/70 border border-white/40 text-gray-700 hover:bg-white/80 hover:border-white/50"
          )}
          aria-label="Open menu"
          title="Menu"
        >
          <MenuIcon size={18} />
        </button>
      </div>
    </div>
  );
}