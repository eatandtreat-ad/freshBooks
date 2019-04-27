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
        this.extractInvoiceItems();
        this.hideLoading();
      });
  }

  extractedCount = 0;
  extractInvoiceItems = () => {
    if (this.extractedCount >= this.invoices.length) {
      //DONE
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

  getInOrder = (items) => {
    return _.orderBy(items, ["quantity"], ["desc"]);
  }
  
  addItemsToDisplay = items => {
    items.forEach(item => {
      let foundItem = _.find(this.invoiceItems, function (obj) {
        return obj.item_id === item.item_id;
      });
      if (!!foundItem)
        foundItem.quantity += item.quantity;
      else
        this.invoiceItems.push(item);
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
