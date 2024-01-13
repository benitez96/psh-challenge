import { useCallback, useMemo } from "react";
import { useStatsQuery } from "../hooks/useStatsQuery"
import { LoadingWithBackdrop } from "./LoadingWithBackdrop"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip } from "@nextui-org/react";
import { EmptyRequestCard } from "./EmptyRequestCard";
import DownloadButton from "./DownloadCSV";

const columns = [
  { name: "PLAYER", uid: "player" },
  { name: "POSITION", uid: "position" },
  { name: "SCORE", uid: "score" },
];

export const StatsTable = () => {

  const renderCell = useCallback((stat, columnKey) => {
    const cellValue = stat[columnKey];

    switch (columnKey) {
      case "player":
        return (
          <User
            avatarProps={{ radius: "full", src: cellValue.avatar }}
            name={cellValue.nickname}
          >
            {cellValue.nickname}
          </User>
        );
      case "score":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "position":
        return (
          <Chip 
            className="capitalize" 
            color={
              stat.position === 1
                ? "success"
                : stat.position === 2
                ? "warning"
                : stat.position === 3
                ? "danger"
                : "default"
            }
            size="sm" 
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);
  
  const { data, isLoading, isError, error } = useStatsQuery()

  const stats = useMemo(() => {
    if (data) {
      return data.map((stat, index) => ({
        ...stat,
        position: index + 1,
      }));
    }
    return [];
  }, [data]);

  if (isLoading) return <LoadingWithBackdrop />

  if (!stats.length) return <EmptyRequestCard />


  return (
    <>
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="start">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={stats}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <DownloadButton stats={stats} />
    </>
  )
}


