import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @Input() value: string = '';

  // @Output() newValue = new EventEmitter<string>();

  private testValue = '2';

  public payPalConfig ? : IPayPalConfig;


  ngOnInit(): void {
      this.initConfig();
      console.log(this.value);
      console.log(this.testValue);
      this.testValue = this.value;
      console.log(this.value);
      console.log(this.testValue);

  }

  private initConfig(): void {


      this.payPalConfig = {
          currency: 'USD',
          clientId: 'sb',
          createOrderOnClient: (data) => < ICreateOrderRequest > {
              intent: 'CAPTURE',
              purchase_units: [{
                  amount: {
                      currency_code: 'USD',
                      // value: '9.99',
                      value: this.testValue,

                      breakdown: {
                          item_total: {
                              currency_code: 'USD',
                              // value: '9.99'
                              value: this.testValue
                          }
                      }
                  },
                  items: [{
                      name: 'Enterprise Subscription',
                      quantity: '1',
                      category: 'DIGITAL_GOODS',
                      unit_amount: {
                          currency_code: 'USD',
                          value: this.testValue,
                      },
                  }]
              }]
          },
          advanced: {
              commit: 'true'
          },
          style: {
              label: 'paypal',
              layout: 'vertical'
          },
          onApprove: (data, actions) => {
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then(details => {
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
              });

          },
          onClientAuthorization: (data) => {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
              // this.showSuccess = true;
          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
              // this.showCancel = true;

          },
          onError: err => {
              console.log('OnError', err);
              // this.showError = true;
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
              // this.resetStatus();
          }
      };
  }
}
