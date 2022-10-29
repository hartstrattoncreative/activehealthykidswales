type Reference = {
  _ref: string;
  _type: string;
};

enum ActionTypes {
  'internalPage' = 'internalPage',
  'url' = 'url',
  'file' = 'files',
}

export type ActionType = keyof typeof ActionTypes;
export type ActionTypeProps = {
  _type?: string;
  internalPage?: Reference; // TODO: see if we can remove this from query
  internalModal?: Reference;
  actionType: ActionType;
  href?: string;
  url?: string;
  openInTab?: boolean;
  file?: { url: string };
};
