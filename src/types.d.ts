type Player = {
  id: string;
  name: string;
  score: number;
};

type PlayersProps = {
  players: Player[];
};

type PlayerProps = {
  id: string;
  index: number;
  name: string;
  score: number;
  changeScore: (index: number, operation: number) => void;
  removePlayer: (id: string) => void;
};

type AddPlayerProps = {
  addPlayer: (name: string) => void;
};

type CounterProps = {
  index: number;
  score: number;
  changeScore: (index: number, operation: number) => void;
};
