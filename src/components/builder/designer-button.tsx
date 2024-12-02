import { DesingerButtonType } from "../form-elements/types";
function Square({ icon, text }: DesingerButtonType) {
  const Icon = icon;
  return (
    <div className="designer-button-square">
     <span className="m-2">
     <Icon size={30} />
     </span>
      <span>{text}</span>
    </div>
  );
}
export type DesingerButtonProps = DesingerButtonType & {
  shape: "square" | "rectangle";
};
export function DesingerButton({ shape, icon, text }: DesingerButtonProps) {
  if (shape === "square") return <Square icon={icon} text={text} />;
  if (shape === "rectangle") return <Square icon={icon} text={text} />;
  return null;
}
