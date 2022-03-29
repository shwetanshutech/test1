var nem = require('/node_modules/symbol-sdk');
var operators = require('/node_modules/rxjs/operators');
let url = 'http://api-01.ap-northeast-1.096x.symboldev.network:3000';

const id = '0AACAB8D9822E2AD';
const mosaicId = new nem.MosaicId(id);
const mosaiC = new nem.Mosaic(mosaicId);

/*
const mosaicAmountview = new MosaicAmountView(mosaicInfo,Amount);
*/

const accountHttp = new nem.AccountHttp(url);
const mosaicHttp = new nem.MosaicHttp(url);
const mosaicService = new nem.MosaicService(accountHttp, mosaicHttp);
const address = nem.Address.createFromRawAddress("TDJB5LTMX44AY7O2FHSNEXQGBDBHNHZCEIW222Y");
mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(operators.mergeMap((_) => _))
    .subscribe((mosaic) => {
	$("#account_bal").text(mosaic.relativeAmount());
	$("#balname").text(mosaic.fullName());
	$("#account_bal2").text(mosaic.relativeAmount());
	$("#balname2").text(mosaic.fullName());
	},
	err => console.error(err));

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        operators.mergeMap((_) => _)
    )
    .subscribe(mosaic => console.log('You have', mosaic.relativeAmount(), mosaic.fullName()),
        err => console.error(err));

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        operators.mergeMap((_) => _)
    )
    .subscribe(mosaic => console.log('You have', mosaic.relativeAmount()),
        err => console.error(err));
