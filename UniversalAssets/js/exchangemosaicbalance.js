var nem = require('/node_modules/symbol-sdk');
var operators = require('/node_modules/rxjs/operators');
let url = 'http://api-01.ap-northeast-1.096x.symboldev.network:3000';

const id = '0AACAB8D9822E2AD';
const mosaicId = new nem.MosaicId(id);
const mosaiC = new nem.Mosaic(mosaicId);

var symbolmosaicamount;
var vagabondmosaicamount;

/*
const mosaicAmountview = new MosaicAmountView(mosaicInfo,Amount);
*/

const accountHttp = new nem.AccountHttp(url);
const mosaicHttp = new nem.MosaicHttp(url);
const mosaicService = new nem.MosaicService(accountHttp, mosaicHttp);
const address = nem.Address.createFromRawAddress("TCXCA4IQ6JIFZCWEAPLFCERSWL2MSTTXZABR7ZY");

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(operators.mergeMap((_) => _))
    .subscribe((mosaic) => {
	$("#account_bal_symbol").text(Number(mosaic.relativeAmount()).toFixed(2));
	symbolmosaicamount = mosaic.relativeAmount();
	$("#symbol_text").text(" symbol.xym");
	},
	err => console.error(err));

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(operators.mergeMap((_) => _))
    .subscribe((mosaic) => {
	$("#account_bal_vagabond").text(Number(mosaic.relativeAmount()).toFixed(2));
	vagabondmosaicamount = mosaic.relativeAmount();
	$("#vagabond_text").text(" energy.vagabond");
	},
	err => console.error(err));

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        operators.mergeMap((_) => _)
    )
    .subscribe(mosaic => 
	console.log('You have', mosaic.relativeAmount(), mosaic.fullName()),
        err => console.error(err));

mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        operators.mergeMap((_) => _)
    )
    .subscribe(mosaic => mosaic.relativeAmount());

		
		