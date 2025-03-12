// Type definitions for bowlerInfo based on the ViewModel of the backend BowlingLeague database
export type bowlerInfo = {
  id: number;
  bowlerId: number;
  bowlerFirstName?: string;
  bowlerMiddleInit?: string;
  bowlerLastName?: string;
  teamName?: string;
  bowlerAddress?: string;
  bowlerCity?: string;
  bowlerState?: string;
  bowlerZip?: string;
  bowlerPhoneNumber?: string;
};
