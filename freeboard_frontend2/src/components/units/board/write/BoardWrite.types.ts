export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string
    address?: string
    addressDetail?: string
  }
}
export interface IMyCreateBoardInput { 
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  writer?: string;
  password?: string;
  boardAddress?: {
    zipcode?: string
    address?: string
    addressDetail?: string
  }
}