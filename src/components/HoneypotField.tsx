import { HONEYPOT_FIELD } from "@/lib/spam-protection-shared";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Decoy field for bots. display:none (not type="hidden" — many scrapers
 * specifically skip hidden-type inputs but still fill anything else they
 * find). Real users never see or reach it; tabIndex/autoComplete keep it
 * out of keyboard nav and password managers too.
 */
export default function HoneypotField({ value, onChange }: HoneypotFieldProps) {
  return (
    <div style={{ display: "none" }} aria-hidden="true">
      <label htmlFor={HONEYPOT_FIELD}>Company Website</label>
      <input
        type="text"
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
