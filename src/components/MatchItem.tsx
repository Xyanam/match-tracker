type Props = {};

const MatchItem = ({}: Props) => {
  return (
    <div className="bg-muted rounded-sm px-10 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-base font-semibold">Command 1</h1>
        <div className="flex flex-col gap-2">
          <span>1:0</span>
          <span>Live</span>
        </div>
        <h1 className="text-base font-semibold">Command 2</h1>
      </div>
    </div>
  );
};

export default MatchItem;
