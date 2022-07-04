import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FreshBooksApiProvider } from '../../providers/fresh-books-api/fresh-books-api';
import moment from "moment";
import _ from "lodash";

/**
 * Generated class for the WeekOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-week-orders',
  templateUrl: 'week-orders.html',
})
export class WeekOrdersPage {
  fromDate: any;
  toDate: any;
  invoices: any = [];
  invoiceItems: any = [];
  business_memberships: any = [];
  selected_business_membership;

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
  }

  extractInvoices = () => {
    this.showLoading();
    let toDate = moment(this.toDate).format("YYYY-MM-DD");
    let fromDate = moment(this.fromDate).format("YYYY-MM-DD");
    this.freshBooksApiProvider
      .getInvoices(this.selected_business_membership, ("due_date_start=" + fromDate + "&due_date_end=" + toDate))
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
      this.calculatePCs();

      return;
    }
    let invoice = this.invoices[this.extractedCount];
    this.freshBooksApiProvider
      .getInvoice(this.selected_business_membership, invoice.invoice_id)
      .then((data: any) => {
        Object.assign(invoice, data.invoice);
        // invoice.lines = data.invoice.line_items;
        this.addItemsToDisplay(data.invoice.line_items);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeekOrdersPage');
  }

}
