/* eslint-disable-next-line */
export type TestComponentProps = {
  title: string;
};

export const TestComponent = ({ title }: TestComponentProps) => {
  return (
    <div className="w-full text-center">
      <h1>Welcome to TestComponent!</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default TestComponent;
