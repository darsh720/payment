import React from 'react'
import GooglePayButton from '@google-pay/button-react'

function Payment() {
    return (
        <div>
            <h1>Gpay Payment React Demo</h1>
            <hr />
            <GooglePayButton environment='TEST'
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: '',
                                    gatewayMerchantId: '',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '',
                        merchantName: '',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '1',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ['PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('Success', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                    console.log('Payment Autorised Success', paymentData)
                    return { transactionState: 'SUCCESS' }
                }}
                existingPaymentMethodRequired='false'
                buttonColor='black'
                buttonType='Buy' />
        </div>
    )
}

export default Payment