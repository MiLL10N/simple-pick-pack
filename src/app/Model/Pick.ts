export class selectPickListModel {
  pickNo: string;
  status: string;
  totalDocNum: number;
  totalPrice: number;
}
export class selectPickItemGroupModel {
  itemGrpCode: string;
  itemGrpName: string;
  status: string;
}

export class selectPickItemByGroupModel {
  itemGrpCode: string;
  docDueDate: string;
  pickNo: string;
  itemGrpName: string;
  selectPickItems: selectPickItem[];
}
export class selectPickItem {
  binCode: string;
  dscription: string;
  isbn: string;
  itemCode: string;
  quantity: number;
  flagPick: any;
}
