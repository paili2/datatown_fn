import { useSidebarStore } from '../../hooks/useSidebarStore';
import Image from 'next/image';
import Link from 'next/link';
import { getSidebarJustifyClass, isSidebarOpen } from '../../utils/sidebarUtils';
import { sidebarLogos } from '../../data/sidebarLogoData';

const SidebarLogo = () => {
  const { isExpanded, isMobileOpen } = useSidebarStore();
  const sidebarOpen = isSidebarOpen(isExpanded, isMobileOpen);
  const justifyClass = getSidebarJustifyClass(isExpanded);
  const logos = sidebarOpen ? sidebarLogos.open : sidebarLogos.closed;

  return (
    <div className={`py-8 flex  ${justifyClass}`}>
      <Link href="/">
        <Image {...logos} />
      </Link>
    </div>
  );
};

export default SidebarLogo;
