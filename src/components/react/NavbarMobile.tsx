import Logo from "./Logo";
import ContactButton from "./ContactButton";
import MobileMenu from "./MobileMenu";

type Props = {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function NavbarMobile({ open, onToggle, onClose }: Props) {
  return (
    <div className="flex items-center justify-between p-8 md:hidden">
      {/* LEFT */}
      <Logo size="sm" />

      {/* RIGHT */}
      <div className="flex items-center justify-center gap-4">
        <ContactButton size="sm" />
        <MobileMenu open={open} onToggle={onToggle} onClose={onClose} />
      </div>
    </div>
  );
}
