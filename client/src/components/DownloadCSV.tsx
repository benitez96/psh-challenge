import { Button } from "@nextui-org/react";
import moment from "moment";
import { Stat } from "../types";
import CsvDownloader from 'react-csv-downloader';
import { createRef } from "react";


interface Props {
  stats: Stat[];
}

export default function DownloadButton({ stats }: Props) {

  const formatData = (data) => {
    return data.map((item) => ({
      position: item.position,
      player_id: item.player.id,
      player_nickname: item.player.nickname,
      player_avatar: item.player.avatar,
      score: item.score,
      created_at: moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')
    }))
  }

  const columns = [
    {
      id: 'position',
      displayName: 'Position'
    },
    {
      id: 'player_id',
      displayName: 'Player ID'
    },
    {
      id: 'player_nickname',
      displayName: 'Player Nickname'
    },
    {
      id: 'player_avatar',
      displayName: 'Player Avatar'
    },
    {
      id: 'score',
      displayName: 'Score'
    },
    {
      id: 'created_at',
      displayName: 'Created At'
    }
  ]

  const csvRef = createRef()

  return (
    <div className="py-2">
      <Button
        color="primary"
        fullWidth
        onClick={() => {
          //@ts-ignore
          csvRef.current.handleClick()
        }}
      >
        Download CSV
      </Button>
      <CsvDownloader
        datas={formatData(stats)}
        filename="game_stats"
        ref={csvRef}
        style={{display: 'none'}}
        columns={columns}
      >
        Download
      </CsvDownloader>
    </div>
  );
}