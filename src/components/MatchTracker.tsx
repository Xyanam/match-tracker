import Alert from "./ui/Alert";
import Button from "./ui/Button";

const MatchTracker = () => {
  return (
    <div className="px-11 py-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold italic">Match Tracker</h1>

        <div className="flex gap-4">
          <Alert text="Ошибка: не удалось загрузить информацию" type="error" />
          <Button trailingIcon="refresh">Обновить</Button>
        </div>
      </div>
    </div>
  );
};

export default MatchTracker;
