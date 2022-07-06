import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { FreshBooksApiProvider } from '../../providers/fresh-books-api/fresh-books-api';
import moment from "moment";
import _ from "lodash";

/**
 * Generated class for the ExtractInvoiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extract-invoice-detail',
  templateUrl: 'extract-invoice-detail.html',
})
export class ExtractInvoiceDetailPage {
  fromDate: any;
  toDate: any;
  invoices: any = [];
  invoiceItems: any = [];
  business_memberships: any = [];
  selected_business_membership;
  public window: any = window;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public freshBooksApiProvider: FreshBooksApiProvider) {
    this.showLoading();
    this.freshBooksApiProvider.getBusiness_memberships().then((data: any) => {

      this.hideLoading();
      this.business_memberships = data.organizations;
      this.selected_business_membership = this.business_memberships[0].organization_id;
      this.fromDate = moment().add(1, 'days').format("YYYY-MM-DD");
      this.toDate = moment().add(7, 'days').format("YYYY-MM-DD");

    });

    this.window.FileHandlers = {
      writeFile: (fileEntry, dataObj) => {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter(function (fileWriter) {

          fileWriter.onwriteend = function () {
            console.log("Successful file write...");
            // window.FileHandlers.readFile(fileEntry);
          };

          fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
          };

          // If data object is not passed in,
          // create a new Blob instead.
          if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
          }

          fileWriter.write(dataObj);
        });
      },
      readFile: (fileEntry) => {

        fileEntry.file(function (file) {
          var reader = new FileReader();

          reader.onloadend = function () {
            console.log("Successful file read: " + this.result);
            // displayFileData(fileEntry.fullPath + ": " + this.result);
          };

          reader.readAsText(file);

        }, (err) => {
          console.log(err);
        });
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtractInvoiceDetailPage');
  }

  extractInvoices = () => {
    this.showLoading();
    let toDate = moment(this.toDate).format("YYYY-MM-DD");
    let fromDate = moment(this.fromDate).format("YYYY-MM-DD");
    this.invoices = [];
    this.freshBooksApiProvider
      .getInvoices(this.selected_business_membership, ("due_date_start=" + fromDate + "&due_date_end=" + toDate + "&sort_column=due_date"))
      .then((data: any) => {
        this.invoices = data.invoices;
        this.extractedCount = 0;
        this.invoiceItems = [];
        this.materialData = [];
        this.extractInvoiceItems();
        this.hideLoading();
      });
  }


  // extractItemsContents = (item_id) => {
  //   // let item_id = "1764297000000669001";
  //   this.freshBooksApiProvider
  //     .getItemDetail(this.selected_business_membership, item_id)
  //     .then((data: any) => {

  //       // this.showItems(data);
  //     });
  // }

  extractedCount = 0;
  extractInvoiceItems = () => {
    if (this.extractedCount >= this.invoices.length) {
      //DONE
      this.extractJsonForCsv(this.invoices);
      // this.calculatePCs();

      return;
    }
    let invoice = this.invoices[this.extractedCount];
    this.freshBooksApiProvider
      .getInvoice(this.selected_business_membership, invoice.invoice_id)
      .then((data: any) => {
        Object.assign(invoice, data.invoice);
        // invoice.lines = data.invoice.line_items;
        // this.addItemsToDisplay(data.invoice.line_items);
        this.extractedCount++;
        this.extractInvoiceItems();
      });
  }

  getReportOnConsole = () => {
    let retVal = [];
    for (let i in this.invoices) {
      let ret: any = {};
      let invoice = this.invoices[i];

      ret.notes = this.invoices[i].notes;
      ret.line_items = this.invoices[i].line_items.map(item => { return { name: item.name, description: item.description }; });
      ret.total = this.invoices[i].total;
      ret.balance = this.invoices[i].balance;
      ret.name = this.invoices[i].contact_persons_details[0].first_name + " " + this.invoices[i].contact_persons_details[0].last_name;
      ret.phone = this.invoices[i].contact_persons_details.phone;
      ret.billing_address = this.invoices[i].billing_address.address;


      retVal.push(ret);

    }
    console.log(retVal);
    // copy(retVal);
  }

  getInOrder = (items) => {
    return _.orderBy(items, ["quantity"], ["desc"]);
  }

  addItemsToDisplay = items => {
    // return new Promise(resolve => {
    items.forEach(async (item) => {
      let foundItem = _.find(this.invoiceItems, function (obj) {
        return obj.item_id === item.item_id;
      });
      if (!!foundItem)
        foundItem.quantity += item.quantity;
      else {
        await this.freshBooksApiProvider
          .getItemDetail(this.selected_business_membership, item.item_id)
          .then((data: any) => {
            item.detail = data.item;
            // this.showItems(data);
          });
        this.invoiceItems.push(item);
      }
    });
    // });

  }

  materialData = [];
  jsonDataForCsv = [];
  extractJsonForCsv = (invoices: any) => {
    let rowCount = 0;
    this.jsonDataForCsv = [];

    console.log(invoices);

    _.forEach(invoices, (invoice) => {
      rowCount++;

      const item = invoice.line_items[0];
      this.jsonDataForCsv.push({
        "ID": invoice.invoice_number,//rowCount,
        "Item Name": item.quantity + " - " + item.name,
        // "Quantity Ordered": item.quantity,
        "Due Date": moment(invoice.due_date).format("ddd DD-MM-YY") + " - " + invoice.cf_time,
        // "Delivery Time": invoice.cf_time,
        "Total": invoice.balance,
        "Status": invoice.status,
        // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
        "Customer Name": invoice.customer_name + " |\n " + invoice.shipping_address.address + " |\n " + invoice.shipping_address.city,
        // "Shipping Street 1": invoice.shipping_address.address,
        // "Shipping City": invoice.shipping_address.city
      });
      for (let i = 1; i < invoice.line_items.length; i++) {
        const item = invoice.line_items[i];
        this.jsonDataForCsv.push({
          "ID": "",//rowCount,
          "Item Name": item.quantity + " - " + item.name,
          // "Quantity Ordered": item.quantity,
          "Due Date": "",
          // "Delivery Time": invoice.cf_time,
          "Total": "",
          "Status": "",
          // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
          "Customer Name": "",
          // "Shipping Street 1": invoice.shipping_address.address,
          // "Shipping City": invoice.shipping_address.city
        });
      }
      // _.forEach(invoice.line_items, (item) => {
      //   this.jsonDataForCsv.push({
      //     "ID": invoice.invoice_number,//rowCount,
      //     "Item Name": item.quantity + " - " + item.name,
      //     // "Quantity Ordered": item.quantity,
      //     "Due Date": moment(invoice.due_date).format("ddd DD-MM-YY") + " - " + invoice.cf_time,
      //     // "Delivery Time": invoice.cf_time,
      //     "Total": invoice.balance,
      //     "Status": invoice.status,
      //     // "Customer Name": invoice.contact_persons_details[0].first_name + " - " + invoice.contact_persons_details[0].mobile,
      //     "Customer Name": invoice.customer_name + " |\n " + invoice.shipping_address.address + " |\n " + invoice.shipping_address.city,
      //     // "Shipping Street 1": invoice.shipping_address.address,
      //     // "Shipping City": invoice.shipping_address.city
      //   });
      // });
    });
    debugger
    let csv = this.ConvertToCSV(this.jsonDataForCsv, _.keys(this.jsonDataForCsv[0]));
    console.log(csv);

    // const a = document.createElement('a');
    const blob = new Blob([csv], { type: 'text/csv' });
    // const url = window.URL.createObjectURL(blob);

    // a.href = url;
    // a.download = 'myFile.csv';
    // a.click();
    // window.URL.revokeObjectURL(url);
    // a.remove();



    //send file on email Use ZOHO
    let toDate = moment(this.toDate).format("YYYY-MM-DD");
    let fromDate = moment(this.fromDate).format("YYYY-MM-DD");

    let email = prompt("Please enter your name", "lsalmskari@scad.gov.ae");
    let mailBody = {
      "send_from_org_email_id": true,
      "to_mail_ids": [
        "mullahkhan@scad.gov.ae",
        email
        // "eatandtreat.ad@gmail.com"
      ],
      "cc_mail_ids": [
        // "mullahkhan@scad.gov.ae"
      ],
      "subject": ("Invoices from " + fromDate + " - " + toDate),
      "body": "Save below lines as CSV,<br/><hr/><br/><br/> " + csv + "<br/><br/><hr/>"

    }
    this.freshBooksApiProvider.sendEmail(this.selected_business_membership, mailBody).then((data: any) => {
      if (data.code == 0)
        alert("Data sent on Email");
      console.log(data);
    });

    // Dummy implementation for Desktop download purpose
    try {
      // const data: string = encodeURI(csv);
      // const link: HTMLElement = document.createElement('a');
      // link.setAttribute('href', data);
      // link.setAttribute('download', 'myFile.csv');
      // link.click();
    } catch (error) {

    }

    try {//Save File in IOS 
      let window = this.window;
      this.window.requestFileSystem(this.window.LocalFileSystem.PERSISTENT, 0, function (fs) {

        console.log('file system open: ' + fs.name);
        fs.root.getFile("report.csv", { create: true, exclusive: false }, function (fileEntry) {

          console.log("fileEntry is file?" + fileEntry.isFile.toString());
          // fileEntry.name == 'someFile.txt'
          // fileEntry.fullPath == '/someFile.txt'
          window.FileHandlers.writeFile(fileEntry, blob);

        }, (err) => {
          console.log(err);
        });

      }, (err) => { console.log(err) });

    } catch (error) {

    }


  }
  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',"' + array[i][head] + '"';
      }
      str += line + '\r\n';
    }
    return str;
  }

  calculatePCs = () => {
    debugger;
    this.materialData = [];
    this.invoiceItems.forEach(item => {
      item.detail.custom_fields.forEach(custom_field => {
        let foundMaterialItem = _.find(this.materialData, function (obj) {
          return obj.customfield_id === custom_field.customfield_id;
        });
        if (!foundMaterialItem) {
          custom_field.quantity = 0;
          foundMaterialItem = custom_field;
          this.materialData.push(foundMaterialItem);
        }
        foundMaterialItem.quantity = foundMaterialItem.quantity + (custom_field.value * item.quantity);
      });

    });
  }


  loading;
  showLoading = () => {
    this.loading && this.hideLoading();
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loading.present();
  };
  hideLoading() {
    this.loading.dismiss();
    this.loading = null;
  }


}
