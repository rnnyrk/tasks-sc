export type Categories = 'good' | 'bad' | 'actions' | 'ideas';

export type Data = {
  description: string;
  id: string;
  title: string;
};

export type ExampleData =
  | {
      [key in Categories]: Data[];
    }
  | null;
