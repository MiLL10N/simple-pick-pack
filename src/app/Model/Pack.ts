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
    pickNo:string;
    isSelected = false;
  }
  export class selectPackListModel {
    packNo: string;
    status: string;
    totalDocNum: number;
    totalPrice: number;
  }
  export class  selectPackListForConfirm{
    itemCode: string;
    dscription: string;
    quantity: number;
    isbn: string;
    isbnRecheck : string;
    unit: number;
    package : string;
    docNum: string;
  }