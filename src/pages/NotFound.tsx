
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Страница не найдена</h2>
        <p className="text-gray-600 mb-6">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Button asChild className="bg-purple-700 hover:bg-purple-800">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
