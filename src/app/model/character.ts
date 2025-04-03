export interface Character {
    id?: string;
    name: string;
    house?: string;
    species?: string;
    image?: string;
    wizard?: boolean;
    ancestry?: string;
    wand?: {
      wood?: string;
      core?: string;
      length?: number;
    };
    actor?: string;
  }
  