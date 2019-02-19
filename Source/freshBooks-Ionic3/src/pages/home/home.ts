import { Component } from "@angular/core";
import {
  NavController,
  DateTime,
  LoadingController,
  AlertController
} from "ionic-angular";
import { ModalController, NavParams } from "ionic-angular";
import { FreshBooksApiProvider } from "../../providers/fresh-books-api/fresh-books-api";
import moment from "moment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  data: any;
  myDate: any;
  business_memberships: any = [];
  selected_business_membership;
  constructor(
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public freshBooksApiProvider: FreshBooksApiProvider
  ) {
    this.showLoading();
    this.freshBooksApiProvider.getBusiness_memberships().then((data: any) => {
      this.hideLoading();
      this.business_memberships = data.response.business_memberships;
      this.selected_business_membership = this.business_memberships[0].business.account_id;
      this.myDate = moment().format("YYYY-MM-DD");
      this.dateChanged();
    });
  }
  dateChanged = () => {
    this.showLoading();
    let date = moment(this.myDate).format("dddd D MMM");
    this.freshBooksApiProvider
      .getInvoices(this.selected_business_membership, date)
      .then((data: any) => {
        this.data = data.response.result.invoices;
        this.hideLoading();
      });
  };

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
  showDetail = invoice => {
    console.log(invoice);
    let modalPage = this.modalCtrl.create("ModalPage", { invoice: invoice });
    modalPage.present();
  };
  showDetail2 = invoice => {
    console.log(invoice);
    let inputs = [];
    for (let i = 0; i < invoice.lines.length; i++) {
      inputs.push({
        type: "checkbox",
        label: invoice.lines[i].qty + "-" + invoice.lines[i].name,
        value: invoice.lines[i].qty + "-" + invoice.lines[i].name,
        placeholder: invoice.lines[i].name,
        checked: true
        // disabled: true
      });
    }
    let alert = this.alertCtrl.create({
      title: invoice.current_organization,
      subTitle:
        '<span class="' +
        invoice.payment_status +
        '">STATUS : ' +
        invoice.display_status +
        "</span>",
      message:
        `
          <div class="my-message">
            
            <strong>Address: </strong>` +
        invoice.street +
        `
            
          </div>
      `,
      /*
      <strong>Description: </strong>`+invoice.description+`
      <br/>
      <hr>
      <br/>
      <strong>Totat: </strong>`+invoice.amount.amount+' '+invoice.amount.code+`
      <br/>
      <strong>Paid: </strong>`+invoice.paid.amount+' '+invoice.paid.code+`
      <br/>
      <strong>Outstanding: </strong>`+invoice.outstanding.amount+' '+invoice.outstanding.code+`
      */
      inputs: inputs,

      buttons: ["Dismiss"]
    });
    alert.present();
  };
}
