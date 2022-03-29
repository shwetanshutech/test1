
	
const nem = require("/node_modules/symbol-sdk");
const operators_1 = require("/node_modules/rxjs/operators");


const address = nem.Address.createFromRawAddress("TABSXBLJLSESKO7QG5E6EJVKGDDACSSHYRFHH7A");
const accountHttp = new nem.AccountHttp("http://api-01.ap-northeast-1.096x.symboldev.network:3000");

const mosaicHttp = new nem.MosaicHttp("5E62990DCAC5BE8A");
const mosaicService = new nem.MosaicService(accountHttp, mosaicHttp);

mosaicService.mosaicsAmountViewFromAddress(address).pipe(operators_1.mergeMap((_) => _)).subscribe(
	(mosaic) => {
		$("#account_bal").text(mosaic.relativeAmount(),mosaic.fullName());
		console.log(address);
		
	},
	//console.log('You have', mosaic.relativeAmount(), mosaic.fullName()),
	
	(err) => console.error(err)
	);


var nem = require('nem2-sdk');
var operators = require('rxjs/operators')
let url = 'http://40.90.163.184:3000';

const accountHttp = new nem.AccountHttp(url);
const mosaicHttp = new nem.MosaicHttp(url);
const mosaicService = new nem.MosaicService(accountHttp, mosaicHttp);
const address = nem.Address.createFromRawAddress("SCA7ZS-2B7DEE-BGU3TH-SILYHC-RUR32Y-YE55ZB-LYA2");
mosaicService
    .mosaicsAmountViewFromAddress(address)
    .pipe(
        operators.mergeMap((_) => _)
    )
    .subscribe(mosaic => console.log('You have', mosaic.relativeAmount(), mosaic.fullName()),
        err => console.error(err);
		
