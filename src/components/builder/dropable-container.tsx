export type DropableContainerProps = {
  children?: React.ReactNode;
};
export function DropableContainer({ children }: DropableContainerProps) {
  return (
    <div className="rounded-3 p-3 bg-light">
      {children}
      <div className="rounded-3 bg-primary-light py-5 text-center">
        <h4>Drop Elements</h4>
      </div>
    </div>
  );
}
