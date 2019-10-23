export class selectPickForPack {
  docNum: string;
  docDate: string;
  docDueDate: string;
  cardCode: string;
  cardName: string;
  county: string;
  descript: string;
  price: string;
  shipToCode: string;
  transporter: string;
  address: string;
  remark: string;
  pickNo: string;
  isSelected = false;
}
export class selectPackListModel {
  packNo: string;
  status: string;
  totalDocNum: number;
  totalPrice: number;
}

export class selectPackListForConfirm {
  packNo: string;
  unit: number;
  package: string;
  packListForConfirms: packListForConfirm[]=[];
}
export class packListForConfirm {
  itemCode: string;
  dscription: string;
  quantity: number;
  isbn: string;
  isbnRecheck: string;
  unit: number;
  package: string;
  docNum: string;
}
export class selectDocumentPrintingListModel {
  docNum: string;
  docDate: string;
  docDueDate: string;
  cardCode: string;
  cardName: string;
  county: string;
  descript: string;
  price: string;
  shipToCode: string;
  transporter: string;
  address: string;
  remark: string;
  packNo: string;
  isSelected = false;
}

export class selectPackageStock {

  packageId: number;
  packageName: string;
  active: boolean;
  qty: number;
  flagNew:boolean;
}
