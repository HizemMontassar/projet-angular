export class Reclamation {
  id: number;
  idProduct: number;
  date: string;
  description: string;
  status: boolean;

  constructor(idProduct: number, date: string, description: string, status: boolean) {
    this.idProduct = idProduct;
    this.date = date;
    this.description = description;
    this.status = status;
  }
}
