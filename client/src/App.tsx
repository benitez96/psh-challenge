import { StatsTable } from "./components/StatsTable";
import { useTheme } from "./hooks/useTheme";
import { Layout } from "./layouts/Layout";

export const App = () => {
  useTheme()
  return (
      <Layout>
        <h2 className="text-xl p-2">Best scores</h2>
        <StatsTable />
      </Layout>
  );
}
