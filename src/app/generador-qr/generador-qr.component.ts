import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrls: ['./generador-qr.component.scss']
})
export class GeneradorQrComponent implements OnInit {

  public values: string ;
  public cedula: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  constructor() {
    this.level = "L";
    this.cedula="";
    this.values = "http://10.100.1.4:4200/estudiante/"+this.cedula;
    // this.values = "http://localhost:4200/estudiante/"+this.cedula;

    this.width = 200;
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }

  ngOnInit(): void {
  }


  saveAsImage(parent: any) {
    // fetches base 64 date from image

    const parentElement = parent.elementRef.nativeElement.querySelector("img").src;
    console.log(parentElement);
    // converts base 64 encoded image to blobData
    let blobData = this.convertBase64ToBlob(parentElement);

    // saves as image
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blobData, this.cedula+"-qr");
    } else { // chrome
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      // window.open(url);
      const link = document.createElement('a');
      link.href = url;
      link.download = this.cedula+"-qr";
      link.click();
    }

  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }

}
