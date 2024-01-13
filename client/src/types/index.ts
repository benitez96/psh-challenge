export interface Stat {
    id:         number;
    player:     Player;
    score:      number;
    created_at: Date;
    position?:  number;
}

export interface Player {
    id:       number;
    nickname: string;
    avatar:   string;
}