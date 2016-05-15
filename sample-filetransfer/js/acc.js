//get acc info
var userNameAth;
var UseridX;
var nameX ;
var snameX ;
var usrIDx;
var accNox;
var inboxCount = 0;
var setCount = 1;
var tickerContent = "";
var mag = " ";

function CdaFeed(){
	points = getCdaData();
	//alert("getprod..");
	//document.getElementById("listData").innerHTML = "";
	try {document.getElementById("setApps").innerHTML = "";}
					catch(err) {
   // alert(err.message);
}
	
	try { 	document.getElementById("selectAppVeh").innerHTML = "";}
					catch(err) {
   // alert(err.message);
					}
    try { document.getElementById("inbox").innerHTML = "";
        inboxCount = 0;}
    catch(err) {
        
    }
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 500; pointIndex++) {
        			point = points[pointIndex];
										
var ApplicationID =  point.applicationid ;
var Status =  point.status ;
var ApplicationType =  point.applicationtype ;
var UserID =  point.userid ;
var FullName =  point.fullname ;
var CompanyName =  point.companyname ;
var CompanyRegNo =  point.companyregno ;
var ContactCell =  point.contactcell ;
var ContactHome =  point.contacthome ;
var ContactWork =  point.contactwork ;
var Email =  point.email ;
var Fax =  point.Fax ;
var IdentityNumber =  point.IdentityNumber ;
var MagisterialDistrict =  point.magisterialdistrict ;
var DateCreatedApp =  point.Created_Date ;
var RegistrationNumberVehicle1 =  point.registrationnumbervehicle1 ;
var Vehicle1Class =  point.vehicle1class ;
var VehicleColour =  point.vehiclecolour ;
var TagID =  point.tagid ;
var DocStatus =  point.docStatus ; 
var RouteCardAdministrator =  point.routecardadministrator ;
var DocumentationVerified =  point.documentationverified ;
var DateofMIScapture =  point.dateofmiscapture ;
var Usrmbid =  point.usrmbid ;
var ItemID = point.itemid;

var splits = ApplicationID.split("string;#");
var ApplicationIDClean =(splits[1]);	
//alert(ApplicationIDClean);
					//userFilter cda
var filterCda = localStorage.getItem("myUserID");//alert("filteracc " + filterCda);
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);
var actnBtn = "";	
//	if (filterCda == UserID && loadType != 0){	
    if (filterCda == UserID){
	if (Status == "Complete"){ actnBtn = " <div class='ui-btn ui-btn-icon-right ui-mini ui-icon-edit'><a href='#'" + "id='" + ApplicationIDClean + "'" + ">Pending</a></div> "; 
                                var setBckColorAplication = "rgba(72, 183, 75, 0.6)";}else {setBckColorAplication = "rgba(236, 0, 44, 0.52)";}
	if (DocStatus != "Complete"){ actnBtn = "<div class='ui-btn ui-btn-icon-right ui-mini ui-icon-edit'onclick='populateAppDelay()'><a href='doc_upload.html'" + "id='" + ApplicationIDClean + "'" + ">Add Docs</a></div> ";}		
						
	var lstTemp =  "<li class='ui-li-static ui-text-left ui-body-inherit ui-last-child ui-btn ui-btn-icon-none ui-icon-none' style='background-color:" + setBckColorAplication + ";text-align: left;' id='" + ItemID + "' onclick='cdaFunc(this.id);'>" + "# " + ItemID + " - " + Status +  "<ul data-divider-theme='a' class='srchAppLi' style='display: none;' id='" + "ul" + ItemID + "'><li>" + "Ref No." + ItemID + "</li><li>" + "Date Submitted " + DateCreatedApp + "</li>" + "<li data-role='list-divider' class='ui-li-divider ui-bar-b' >Profile</li>" + "<li>" + "Email: " + Email + "</li><li>" + "Company: " + CompanyName + "</li><li>" + "Reg No: " + CompanyRegNo + "</li><li>" + "Cell: " + ContactCell + "</li><li>" + "Home: " + ContactHome + "</li><li>"+ "Work: " + ContactWork + "</li><li>" + "Fax: " + Fax + "</li><li>"  + "Id No: " + IdentityNumber + "</li><li>" + "District: " + MagisterialDistrict + "</li>" + "<hr />" + actnBtn + "</ul></li>" ;
        //"<li class='ui-li-static ui-text-left ui-body-inherit ui-last-child ui-btn ui-btn-icon-right ui-icon-plus' style='text-align: left;' id='" + ApplicationIDClean + "' onclick='cdaFunc(this.id);'>" + "# " + ItemID + " - " + Status +  "<ul data-divider-theme='a' class='srchAppLi' style='display: none;' id='" + "ul" + ApplicationIDClean + "'><li>" + "Ref No." + ApplicationIDClean + "</li>" + "<li data-role='list-divider' class='ui-li-divider ui-bar-b' >MyProfile</li>" + "<li>" + "Email: " + Email + "</li><li>" + "Company: " + CompanyName + "</li><li>" + "Reg No: " + CompanyRegNo + "</li><li>" + "Cell: " + ContactCell + "</li><li>" + "Home: " + ContactHome + "</li><li>"+ "Work: " + ContactWork + "</li><li>" + "Fax: " + Fax + "</li><li>"  + "Id No: " + IdentityNumber + "</li><li>" + "District: " + MagisterialDistrict + "</li>" + "<li data-role='list-divider' class='ui-li-divider ui-bar-b' >Vehicle 1</li>" + "<li>" + "Make: " + MakeandModelVehicle1 + " - " + VehicleColour + "</li><li>"  + "Reg: " + RegistrationNumberVehicle1 + "</li><li>" + "Class: " + Vehicle1Class + "</li>" + actnBtn + "</ul></li>" ;
					//document.getElementById("listData").innerHTML += lstTemp;
					try { 	document.getElementById("setApps").innerHTML += lstTemp;}
					catch(err) {
    //alert(err.message);
}
					
					
					var selectAppTemp ="<option value='" + ItemID + "'>" + ItemID + "</option>";
        
					if (DocStatus != "Complete"){ try { 	document.getElementById("selectAppVeh").innerHTML += selectAppTemp;
					}
					catch(err) {
   // alert(err.message);
}}
						 }
        
						 
					
			//add to inbox
    if(filterCda == UserID && Status == "Approved" || Status == "Declined" || Status == "Suspended"){
					inboxCount = inboxCount + 1;
					var inboxTempCda ="<li>" + "<h4>" + "Application Ref No:" + ItemID + "</h4>" + "<p> Application status: " + "<br />" + Status + "</p><p class='ui-li-aside'><strong>" + "<a href='messagepop.html' id='" + ItemID + "' class='ui-btn ui-mini ui-btn-icon-right ui-nodisc-icon ui-link ui-btn-icon-notext ui-corner-all ui-icon-action' data-rel='dialog' data-transition='pop' onclick='inboxFunc(this.id);'>" +"</a></strong></p>" + "</li>" + "<hr>" ;
					var tickerTempCda = "<span>" + " <img src='images/mailicon.png' width='18px' height='auto'>" + " Application Ref No: " + ItemID  + " Status: " + Status +  "</span>";
					
					tickerContent += tickerTempCda; 
					try { 	document.getElementById("inbox").innerHTML += inboxTempCda;}
					catch(err) {
   // alert(err.message);
}
					
					
	}else{}
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Loaded"; 

	try { document.getElementById("inbCnt").innerHTML = inboxCount ; }
					catch(err) {
   // alert(err.message);
}
try { document.getElementById("inboxHolder").setAttribute("data-collapsed", "false");}
					catch(err) {
   // alert(err.message);
}
var Option1 = "<option value='Select'>Select Application No</option>";
						 $("#selectAppVeh").prepend(Option1);
//document.getElementById("topTicker").innerHTML= "Inbox " + inboxCount + " " + tickerContent;
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Applications...");
	
}

//END CDA

//////////USER

function UserFeed(){
	points = getUserData();
	//alert("getprod..");
	//document.getElementById("listData").innerHTML = "";
	//alert(points);
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 500; pointIndex++) {
        			point = points[pointIndex];
										
var Username = point.username;
var Name = point.name;
var Surname = point.surname;
var Email = point.email	;
var Userid = point.userid;
var Tokenkey = point.tokenkey ;
var Password = point.password;

var Companyname = point.companyname;
var Companyreg = point.companyreg;
var Cell = point.cell;
var Home = point.hometel;
var Work = point.work;
var Fax = point.fax;
var Identityno = point.identityno;
var District = point.district;
var Phyaddress = point.phyaddress;
var Postal = point.postal;

				
					//var logoTrim ="<span><img style='text-align:center' src='" + Logo + "' width='90%' height='auto'></span>"; 
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-last-child ui-btn ui-btn-icon-right ui-icon-carat-r'>" + Name + " " + Surname + "<ul data-divider-theme='a' style='display: none;'><li>" + Userid + "</li><li>" + "Username." + Username + "</li>" + "<li data-role='list-divider' class='ui-li-divider ui-bar-b' >MyProfile</li>" + "<li>" + "Email: " + Email + "</li><li>" + "Tokenkey: " + Tokenkey + "</li><li>" + "Password: " + Password  + "</li><li>" + "End" + "</li><li>" + "CompanyName: " + Companyname  + "</li><li>" + "Company Reg: " + Companyreg  + "</li><li>" + "Cell: " + Cell  + "</li><li>" + "Home Tel: " + Home  + "</li><li>" + "Work Tel: " + Work  + "</li><li>" + "Fax: " + Fax  + "</li><li>" + "ID No.: " + Identityno  + "</li><li>" + "District: " + District  + "</li><li>" + "Phy Aaddress: " + Phyaddress  + "</li><li>" + "Postal: " + Postal  + "</li></ul></li>";
				//	document.getElementById("listData").innerHTML += lstTemp;
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "User Loaded";
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Users...");	
}

//END USER



//////////ACC

function AccFeed(){
	points = gettAccData();
	var  accByUserCount = 0;
	
	//alert("getprod..");
//	document.getElementById("listData").innerHTML = "";
	document.getElementById("setAcc").innerHTML = "";
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 500; pointIndex++) {
        			point = points[pointIndex];
										
var AccNo = point.accno;
var UserID = point.userid;
var AccStatus = point.accstatus;
var StatusFeedback  = point.statusfeedback ;
var Notification = point.notification;

if (StatusFeedback == "undefined"){StatusFeedback = "None"}; 
if (AccStatus == "undefined"){AccStatus = "Active"}; 
//Filter acc
var filterAcc = localStorage.getItem("myUserID");//alert("filteracc " + filterAcc);
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);	
	if (filterAcc == UserID){
		accNox	= point.accno;		
		localStorage.setItem("myAccNo", accNox);
		
		//set color
		if (AccStatus == "Active"){ var setBckColor = "rgb(72, 183, 75)";}else {setBckColor = "rgba(236, 0, 44, 0.82)";}
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-corner-all ui-last-child ui-btn ui-btn-icon-left ui-icon-search' id='" + AccNo + "' onclick='myFunc(this.id);'>" + "Account No " + AccNo  + "<ul data-divider-theme='a'  style=' display: none; ' id='" + "ul" + AccNo + "' ><li class='ui-btn ui-mini' style=' background-color:" + setBckColor + "; width: 120%; text-align: left;'>" + "Status " + AccStatus + "</li>" + "<li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "Alerts " + StatusFeedback + "</li></ul> </li>" ; 
					//document.getElementById("listData").innerHTML += lstTemp;
			
					document.getElementById("setAcc").innerHTML += lstTemp; 
					if (AccStatus == "Active"){ document.getElementById(AccNo).style.backgroundColor = setBckColor}; 
					
					var selectTemp ="<option value='" + AccNo + "'>" + AccNo + "</option>";
					document.getElementById("selectAccH").innerHTML += selectTemp;
					accByUserCount = accByUserCount + 1;
					


					
					if(AccStatus == "Suspended"  || AccStatus == "Pending"){
					inboxCount = inboxCount + 1;
					var inboxTemp ="<li>" + "<h4>" + "Account " + "</h4>" + "<p>" + "<strong><a href='#'>" + AccNo + "</a></strong></p>" + "<p> This account is currently " + AccStatus + "</p><p class='ui-li-aside'><strong>" + "<a href='messagepop.html' class='ui-btn ui-mini ui-btn-icon-right ui-nodisc-icon ui-link ui-btn-icon-notext ui-corner-all ui-icon-action' data-rel='dialog' data-transition='pop'>" +"</a></strong></p>" + "</li>" + "<hr>" ;
					document.getElementById("inbox").innerHTML += inboxTemp;}
					
					
	}else{;}//userFilter
	
		
	
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Accounts:";



}

//END ACC


//////////CARD

function CardFeed(){
	points = getCardData();
	//alert("getprod..");
	//document.getElementById("listData").innerHTML = " ";
	document.getElementById("setTag").innerHTML = " ";
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 25000; pointIndex++) {
        			point = points[pointIndex];
										
var CardNo = point.cardno;
var AccNo = point.accno	;
var Note = point.note;
var Notification = point.notification;
if (Notification == "undefined"){Notification = "None"};

//userFilter card
var filterCrd = localStorage.getItem("currentAccNo");//alert("Current Acc: " + filterCrd );
//var tempJoin = "1;#" + filterCrd; //alert("tmpjiun " +tempJoin);	
	if (filterCrd == AccNo){//alert("accNo Cradlist" + AccNo);			
					//var logoTrim ="<span><img style='text-align:center' src='" + Logo + "' width='90%' height='auto'></span>"; 
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-corner-all ui-last-child ui-btn ui-btn-icon-left ui-icon-check' id='" + CardNo + "' onclick='cardFunc(this.id);'>" + "Tag " +  CardNo  + "<ul data-divider-theme='a' style='display: none;' id='" + "ulc" + CardNo + "'><li>" + " Acc No." + AccNo + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + " Note." + Note + "</li></ul></li>";
					//document.getElementById("listData").innerHTML += lstTemp;
					document.getElementById("setTag").innerHTML += lstTemp;
	}else{;}//userFilter	card				
   
				
				
				
				//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Cards:";
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Cards...");	

}

//END CARD


//////////VEHICLE

function VehicleFeed(){
	points = getVehicleData();
	//alert("getprod..");
	//document.getElementById("listData").innerHTML = "";
	
	//document.getElementById("setVehicle").innerHTML = "";
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 1000; pointIndex++) {
        			point = points[pointIndex];
										
var UserID = point.userid;
var RegistrationNumber = point.registrationnumber;
var MakeModel = point.makemodel;
var VehicleColour = point.vehiclecolour;
var VehicleClass = point.vehicleclass;
var TagID = point.tagid	;
var AccNo = point.accno	;
var CardNo = point.cardno;

var splits = CardNo.split("#");
var CardNoClean =(splits[1]);
					
//userFilter vehicle
var filterVeh = localStorage.getItem("currentAccNo");//alert("filteracc " + filterAcc);
//var tempJoin = "1;#" + filterVeh; //alert("tmpjiun " +tempJoin);	
	if (filterVeh == AccNo){			
					//var logoTrim ="<span><img style='text-align:center' src='" + Logo + "' width='90%' height='auto'></span>"; 
	
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-last-child ui-btn ui-btn-icon-right ui-icon-carat-r' id='" + RegistrationNumber + "' onclick='vehicleFunc(this.id);'>" + MakeModel + " Reg " + RegistrationNumber  + "<ul data-divider-theme='a' style='display: none;' id='" + "ulv" + RegistrationNumber + "'><li>" + " Reg No." + RegistrationNumber + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + " MakeModel." + MakeModel + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "Colour: " + VehicleColour + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "VehicleClass " + VehicleClass + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "TagID" + TagID + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "AccNo" + AccNo + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "CardNo" + CardNoClean + "</li></ul></li>";
					//document.getElementById("listData").innerHTML += lstTemp;
					document.getElementById("setVehicle").innerHTML += lstTemp;
					
					
	}else{;}//userFilter vehicle	 
										 
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Vehicles: ";
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Vehicles...");	
}

//END VEHICLE

//////////TRANSACTIONS

function TransactionFeed(){
	points = getTransData();
	 tagByAccCount = 0;
	  transByTagCount = 0;
	//alert("getprod..");
//	document.getElementById("listData").innerHTML = "";
	document.getElementById("setTrans").innerHTML = "";
	document.getElementById("setTag").innerHTML = "";
	var cardNos = "";
	var i = 0;
	var allCards = [];
	var CardAll = "";
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 25000; pointIndex++) {
        			point = points[pointIndex];
										
var TraID = point.traid;
var AccNo = point.accno;
var CardNo = point.cardno;
var PlazaID = point.plazaid;
var LaneID = point.laneid;
var DateT = point.date;
var VehicleClass = point.vehicleclass;
var Tariff = point.tariff; //alert(TraID + " cc " + CardNo + " date " + DateT+ " accno " + AccNo + " traID " + TraID  );

//var splits = CardNo.split("#");
//var CardNoClean =(splits[1]);

if (PlazaID == "DH"){PlazaID = "De Hoek Plaza"};
if (PlazaID == "ML"){PlazaID = "Mooi North Ramps"};
if (PlazaID == "MM"){PlazaID = "Mooi Mainline Plaza"};
if (PlazaID == "MN"){PlazaID = "Mooi Treverton Ramps"};
if (PlazaID == "MS"){PlazaID = "Mooi South Ramps"};
if (PlazaID == "TB"){PlazaID = "Bergville Ramp Plazas"};
if (PlazaID == "TE"){PlazaID = "Tugela Mainline Plaza"};
if (PlazaID == "TK"){PlazaID = "Tugela East Plaza"};
if (PlazaID == "WG"){PlazaID = "Wilge Plaza"};
					
//userFilter trans
var filterTrans = localStorage.getItem("currentAccNo");//alert("filteratrans " + filterTrans);
var ctag = localStorage.getItem("currentTag");
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);	
	if (filterTrans == AccNo){			
					//var logoTrim ="<span><img style='text-align:center' src='" + Logo + "' width='90%' height='auto'></span>"; 
								
					var lstTemp = ("<p>" + PlazaID + "<br />" + "Date  " + DateT + "<br />" + "<br />" + "Lane " + LaneID  + "<br />" +  "Tariff R " + Tariff + "</p>" + "<hr style='border: 1px #2ad dotted;' />"   );
					//document.getElementById("listData").innerHTML += lstTemp;
					document.getElementById("setTrans").innerHTML += lstTemp;
	//var temp = 	CardNo;
	 // var tagNoTemp = temp;
	
					var lstTempTT = "<div id='" + CardNo + "'  class='ui-btn ui-btn-icon-left ui-icon-tag' onclick='ttFunc(this.id);'>" + "<a href='#' >" + CardNo + " </a>" + "</div>";
					
					document.getElementById("setTag").innerHTML += lstTempTT;
					
					

					tagByAccCount = tagByAccCount +1;
					 transByTagCount = transByTagCount + 1;
					//var addname = "'" + CardNo + "',";
					//var addNames = addNames + addname;
					//alert(CardNo);
					//var allCards = CardNo;
					//var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
					//var i; 
					 
					allCards[i] = CardNo; 
                cardNos += allCards[i];
				//alert(cardNos);
				CardAll += "'" + allCards + "',";
				i++;
				

				//	alert(i + "-" + allCards); 
					//CardAll += "','" + allCards;

					// tagNoTemp = CardNo;}
					
	}else{;}//userFilter vehicle	  
								

				
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
	//document.getElementById("CardNo").innerHTML = tagByAccCount + " Linked Identifiers" ;
	 document.getElementById("TransNo").innerHTML = transByTagCount + " Transactions" ;
//document.getElementById("xxx").innerHTML = "Transactions:";	
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Transactions...");
//var names = ("[" + addNames + "]");
	//alert("ac" + CardAll); 
//alert(CardAll);
var getNam = allCards[0] + "," +  allCards[1] + "," +  allCards[2] + "," + allCards[3] + "," + allCards[4] + "," + allCards[5] + "," +  allCards[6] ;
var names = [getNam];
//alert("gn " + names);
//var names = ['Mike','Matt','Nancy','Adam','Jenny','Nancy','Carl'];
//alert("nn " + names);
//alert("[" + addNames + "]");
var uniqueNames = [];
$.each(names, function(i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
//	alert(uniqueNames);
//	document.getElementById("setTag").innerHTML += uniqueNames
});  
cleanDuplicates();	

}

//END TRANSACTIONS

function cleanDuplicates(){
   
    $('[id]').each(function () {
      //  $('[id="' + this.id + '"]:gt(0)').runIDcount();
        $('[id="' + this.id + '"]:gt(0)').remove();
        
        
    });
   var countTags = $("#setTag div").length;
    document.getElementById("CardNo").innerHTML = countTags + " Linked Identifiers" ;
}

function inboxFunc(id){
  document.getElementById("pomsgArea").text = id;  
}



function TransactionFeedbyTag(){
	points = getTransData();
	transByTagCount = 0;
	//alert("getprod..");
//	document.getElementById("listData").innerHTML = "";
	document.getElementById("setTrans").innerHTML = "";
	
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 50000; pointIndex++) {
        			point = points[pointIndex];
										
var TraID = point.traid;
var AccNo = point.accno;
var CardNo = point.cardno;
var PlazaID = point.plazaid;
var LaneID = point.laneid;
var DateT = point.date;
var VehicleClass = point.vehicleclass;
var Tariff = point.tariff; //alert(TraID + " cc " + CardNo + " date " + DateT+ " accno " + AccNo + " traID " + TraID  );

//var splits = CardNo.split("#");
//var CardNoClean =(splits[1]);

if (PlazaID == "DH"){PlazaID = "De Hoek Plaza"};
if (PlazaID == "ML"){PlazaID = "Mooi North Ramps"};
if (PlazaID == "MM"){PlazaID = "Mooi Mainline Plaza"};
if (PlazaID == "MN"){PlazaID = "Mooi Treverton Ramps"};
if (PlazaID == "MS"){PlazaID = "Mooi South Ramps"};
if (PlazaID == "TB"){PlazaID = "Bergville Ramp Plazas"};
if (PlazaID == "TE"){PlazaID = "Tugela Mainline Plaza"};
if (PlazaID == "TK"){PlazaID = "Tugela East Plaza"};
if (PlazaID == "WG"){PlazaID = "Wilge Plaza"};
					
//userFilter trans
var filterTrans = localStorage.getItem("currentAccNo");//alert("filteratrans " + filterTrans);
var ctag = localStorage.getItem("currentTag"); //alert(ctag);
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);	
	if (filterTrans == AccNo && ctag == CardNo ){			


				var lstTemp = ("<p>" + PlazaID + "<br />" + "Date  " + DateT + "<br />" + "Lane " + LaneID  + "<br />" +  "Tariff R " + Tariff + "<br />" + CardNo + "</p>" + "<hr style='border: 1px #2ad dotted;'  />"   );	
					document.getElementById("setTrans").innerHTML += lstTemp;
					// tagNoTemp = CardNo;}
					transByTagCount = transByTagCount + 1;
	}else{;}//userFilter vehicle	  
								
					
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Transactions:";	
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Transactions...");
 document.getElementById("TransNo").innerHTML = transByTagCount + " Transactions" ;

}
///////trns by tag and cardNo and acc no end/////

//////trans by Acc only////////
function TransactionFeedbyAccount(){
	points = getTransData();
	transByTagCount = 0;
	//alert("getprod..");
//	document.getElementById("listData").innerHTML = "";
	document.getElementById("setTrans").innerHTML = "";
	
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 50000; pointIndex++) {
        			point = points[pointIndex];
										
var TraID = point.traid;
var AccNo = point.accno;
var CardNo = point.cardno;
var PlazaID = point.plazaid;
var LaneID = point.laneid;
var DateT = point.date;
var VehicleClass = point.vehicleclass;
var Tariff = point.tariff; //alert(TraID + " cc " + CardNo + " date " + DateT+ " accno " + AccNo + " traID " + TraID  );

//var splits = CardNo.split("#");
//var CardNoClean =(splits[1]);

if (PlazaID == "DH"){PlazaID = "De Hoek Plaza"};
if (PlazaID == "ML"){PlazaID = "Mooi North Ramps"};
if (PlazaID == "MM"){PlazaID = "Mooi Mainline Plaza"};
if (PlazaID == "MN"){PlazaID = "Mooi Treverton Ramps"};
if (PlazaID == "MS"){PlazaID = "Mooi South Ramps"};
if (PlazaID == "TB"){PlazaID = "Bergville Ramp Plazas"};
if (PlazaID == "TE"){PlazaID = "Tugela Mainline Plaza"};
if (PlazaID == "TK"){PlazaID = "Tugela East Plaza"};
if (PlazaID == "WG"){PlazaID = "Wilge Plaza"};
					
//userFilter trans
var filterTrans = localStorage.getItem("currentAccNo");//alert("filteratrans " + filterTrans);
var ctag = localStorage.getItem("currentTag"); //alert(ctag);
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);	
	if (filterTrans == AccNo){			


				var lstTemp = ("<p>" + PlazaID + "<br />" + "Date  " + DateT + "<br />" + "Lane " + LaneID  + "<br />" +  "Tariff R " + Tariff + "<br />" + CardNo + "</p>" + "<hr style='border: 1px #2ad dotted;'  />"   );	
					document.getElementById("setTrans").innerHTML += lstTemp;
					// tagNoTemp = CardNo;}
					transByTagCount = transByTagCount + 1;
	}else{;}//userFilter vehicle	  
								
					
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	}
//document.getElementById("xxx").innerHTML = "Transactions:";	
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Transactions...");
 document.getElementById("TransNo").innerHTML = transByTagCount + " Transactions" ;

}

/////trans by acc only end/////

/////Auth>>>>>>

function UserAuth(){
	points = getUserData();
var passAth = null;	
userNameAth = null;
	//document.getElementById("listData").innerHTML = "";
userNameAth = document.getElementById("txt-email").value;
//alert(userNameAth);
var usrVeri = 0;
 passAth = document.getElementById("txt-password").value;

var pasVeri = 0;
pointIndex = 0;	

	for (pointIndex = 0; pointIndex < points.length && pointIndex < 1000; pointIndex++) {
        			point = points[pointIndex];
//alert(points.length);	
var Name = point.name;									
var Username = point.username;
var Surname = point.surname;
var Email = point.email	;
var Userid = point.userid;
var Tokenkey = point.tokenkey ;
var Password = point.password;

var Companyname = point.companyname;
var Companyreg = point.companyreg;
var Cell = point.cell;
var Home = point.hometel;
var Work = point.work;
var Fax = point.fax;
var Identityno = point.identityno;
var District = point.district;
var Phyaddress = point.phyaddress;
var Postal = point.postal;


if (Username == userNameAth && Password == passAth ){ 
//if (Password == passAth){pasVeri = 2;}
//alert(Username + " " + Password );
//var authComit = usrVeri + pasVeri; //alert(authComit);

////tempoary bio conditional auth
//if (authComit == 3 || authComit == 0 ){


///setallLocal storage

localStorage.setItem("myUserName", Username);
localStorage.setItem("myName", Name);
localStorage.setItem("mySname", Surname);
localStorage.setItem("myEmail", Email);
localStorage.setItem("myUserID", Userid);
localStorage.setItem("myN3tcToken", Tokenkey);
localStorage.setItem("myPassword", Password);

if(Companyname == "undefined"){Companyname = "";}	
localStorage.setItem("myCompanyName", Companyname);

if(Companyreg == "undefined"){Companyreg = "";}	
localStorage.setItem("myCompanyReg", Companyreg);

if(Cell == "undefined"){Cell = "";}	
localStorage.setItem("myCell", Cell);

if(Home == "undefined"){Home = "";}	
localStorage.setItem("myHomeTel", Home);

if(Work == "undefined"){Work = "";}	
localStorage.setItem("myWorkTel", Work);

if(Fax == "undefined"){Fax = "";}	
localStorage.setItem("myFax", Fax);

if(Identityno == "undefined"){Identityno = "";}	
localStorage.setItem("myIdentityNo", Identityno);

if(District == "undefined"){District = "";}	
localStorage.setItem("myDistrict", District);

if(Phyaddress == "undefined"){Phyaddress = "";}	
localStorage.setItem("myPhyadd", Phyaddress);

if(Postal == "undefined"){Postal = "";}	
localStorage.setItem("myPostal", Postal);

////end local and profile	

	
UseridX = point.userid;
nameX = point.name;
snameX = point.surname;

	// Store
localStorage.setItem("isAuthenticate", "yes");
// Retrieve
checkAuth = localStorage.getItem("isAuthenticate");


  document.getElementById("msgHead").innerHTML = "Welcome " + userNameAth ;

 //alert(userNameAth + UseridX + Password ); 
 //alert(Username + Userid + Password );
 
 
  
//document.getElementById("usridHead").innerHTML = UseridX;
//alert("uidlocal" + UseridX);
  
  document.getElementById("msgBdy").innerHTML = "You will be redirected to your Account Dashboard shortly... " ;
  var myToken = localStorage.getItem("myN3tcToken"); 
 //document.getElementById("accHead").innerHTML = "Welcome " + userNameAth ;
  window.location = "myaccount.html";}
   
  if (myToken == null){
   var newToken = Math.floor((Math.random() * 10000000000) + 1);
   localStorage.setItem("myN3tcToken", newToken);
   var check = localStorage.getItem("myN3tcToken");
   
  }

else{ //pasVeri = 0;
  //usrVeri = 0;
}
}
//alert(check);
///get Local Storage val to match tokenkey
					
					//var logoTrim ="<span><img style='text-align:center' src='" + Logo + "' width='90%' height='auto'></span>"; 
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-last-child ui-btn ui-btn-icon-right ui-icon-carat-r'>" + Name + " " + Surname + "<ul data-divider-theme='a' style='display: none;'><li>" + Userid + "</li><li>" + "Username." + Username + "</li>" + "<li data-role='list-divider' class='ui-li-divider ui-bar-b' >MyProfile</li>" + "<li>" + "Email: " + Email + "</li><li>" + "Tokenkey: " + Tokenkey + "</li><li>" + "Password: " + Password  + "</li><li>" + "End" + "</li></ul></li>";
					//document.getElementById("listData").innerHTML += lstTemp;
					
					
					//if (status == "Incomplete"){alert("Incomplete got"); }
	/////}
//document.getElementById("xxx").innerHTML = "Welcome: " + Username;
//document.getElementById("filterBasic-input").setAttribute("placeholder", "Accounts...");	
}

//END Auth >>>>>>>>

function logOut(){
localStorage.setItem("isAuthenticate", "no");
var getath = localStorage.getItem("isAuthenticate");
//alert("Logged out" + getath );
window.location = "n3account.html";
pasVeri = 0;
  usrVeri = 0;
   localStorage.setItem("myUserName", null);
  localStorage.setItem("myUserID", null);
  localStorage.setItem("myName", null);
  localStorage.setItem("mySname", null);
  
  document.getElementById("usridHead").innerHTML = "-";
  document.getElementById("msgHead").innerHTML = "-";

}

function getUserDetails(){
		 var usr = localStorage.getItem("myUserName");
		  usrIDx = localStorage.getItem("myUserID");
	     var Nme = localStorage.getItem("myName");
         var Snme = localStorage.getItem("mySname");
		var acn = localStorage.getItem("myAccNo");	
    document.getElementById("accHead").innerHTML = "Account";
	 document.getElementById("usridHead").innerHTML = "User: " + usr ;
	//document.getElementById("name").value = Nme ;
	//document.getElementById("lstname").value = Snme ;
	//document.getElementById("email").value = usr ; 
	//document.getElementById("accno").value = acn ; 
	
	}
	
	
function setCurrentAcc(){
	var crntAcc = document.getElementById("selectAcc").value;
	//document.getElementById("accno").text = crntAcc ;
	localStorage.setItem("currentAccNo", crntAcc);
	//document.getElementById("listData").innerHTML = ""; 
	//document.getElementById("select-feed").text = "Select by..";
} 
function setCurrentAccVehadd(){
	var crntAcc = document.getElementById("selectAcc2").value;
	document.getElementById("appid").value = crntAcc ;
	localStorage.setItem("currentAccNo", crntAcc);
	//document.getElementById("listData").innerHTML = ""; 
	//document.getElementById("select-feed").text = "Select by..";
} 

function setCurrentApp(){
	var crntApp = document.getElementById("selectAppVeh").value;
	var vehiclelink = "http://n3tc100docx/_layouts/15/start.aspx#/Lists/VehiclesApplication/AllItems.aspx?InitialTabId=Ribbon%2EListItem&VisibilityContext=WSSTabPersistence#InplviewHashfe2c0f45-61eb-4a5e-9b37-9331d721b540=InitialTabId%3DRibbon%252EListItem-VisibilityContext%3DWSSTabPersistence-FilterField1%3DApplicationID-FilterValue1%3D" + crntApp;
   // alert(vehiclelink);
	//document.getElementById("v1linkid").value = vehiclelink;
    var pullID = localStorage.getItem("myUserID");
	document.getElementById("appid").value = crntApp;
   document.getElementById("userid").value = pullID;
    
	//document.getElementById("userid").value = crntApp;
    
	//document.getElementById("accno").text = crntAcc ;
	localStorage.setItem("currentAppNo", crntApp);
	//document.getElementById("listData").innerHTML = ""; 
	//document.getElementById("select-feed").text = "Select by..";
} 

function setCurrentAppDoc(){
	var crntApp = document.getElementById("selectAppVeh").value;
	//document.getElementById("v1linkid").value = vehiclelink;
    var pullID = localStorage.getItem("myUserID");
	document.getElementById("appid").value = crntApp;
   document.getElementById("userid").value = pullID;
   //document.getElementById("userName").value = crntApp;
    
	//document.getElementById("userid").value = crntApp;
    
	//document.getElementById("accno").text = crntAcc ;
	localStorage.setItem("currentAppNo", crntApp);
	//document.getElementById("listData").innerHTML = ""; 
	//document.getElementById("select-feed").text = "Select by..";
}

function GetForAcc(){
	//var crntAcc = document.getElementById("selectAcc").value;
	//document.getElementById("accno").text = crntAcc ;
	localStorage.setItem("currentAccNo", id);
	CardFeed();
	//document.getElementById("listData").innerHTML = ""; 
		
	//loadType = 1;
//	var srchbyAcc = document.getElementById("select-feed").value;
	//if (srchFor == "Vehicles"){VehicleFeed();}
	//if (srchFor == "Cards"){CardFeed();}
	//if (srchFor == "Transactions"){TransactionFeed();}
	//if (srchFor == "Applications"){CdaFeed();} 
	//if (srchFor == "Accounts"){AccFeed();} 

	//localStorage.setItem("currentSearcgVal", srchFor);
	

	
} 

function setCurrentApplication(){
	var crntAppid = document.getElementById("selectAppID").value;
	document.getElementById("appid").text = crntAppid ;
	localStorage.setItem("currentAppid", crntAppid);
	//document.getElementById("listData").innerHTML = ""; 
	//document.getElementById("select-feed").text = "Select by..";
} 

function setCurrentSrch(){
	loadType = 1;
	var srchFor = document.getElementById("select-feed").value;
	if (srchFor == "Vehicles"){VehicleFeed();}
	if (srchFor == "Cards"){CardFeed();}
	if (srchFor == "Transactions"){TransactionFeed();}
	if (srchFor == "Applications"){CdaFeed();} 
	if (srchFor == "Accounts"){AccFeed();} 
	//alert("aa" + aa);
	localStorage.setItem("currentSearcgVal", srchFor);
	
}

function fun()
{ 
    
    if(document.getElementById("processor").value != ""){
        $('#button_done').removeClass('ui-disabled ui-icon-delete ui-btn-icon-left ui-btn-active');
		$('#button_done').addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
		mag = document.getElementById("processor").value;
      // mag = $('#processor option:selected').innerHTML;
        localStorage.setItem("myDistrict", mag);
       // alert(mag);
		//document.getElementById("Magisterial").value = mag;<br />
}
    else
    $('#button_done').addClass('ui-disabled ui-icon-delete ui-btn-icon-left ui-btn-a'); 
	

}

///New account load user details

function getUrsDetailsNa(){
//document.getElementById("naappform").className = "showform";
 var usrn = localStorage.getItem("myUserName");
		  var usrIDn = localStorage.getItem("myUserID");
	     var Nmen = localStorage.getItem("myName");
         var Snmen = localStorage.getItem("mySname");
		var acnn = localStorage.getItem("myAccNo");
		var tokena = localStorage.getItem("myToken");
	//alert(" usr " + usrn + " usrID " + usrIDn + " Name " + Nmen + " Srname " + Snmen + " AccNo " + acnn );
		document.getElementById("usridHeadna").innerHTML = "User ID:  " + usrIDn ;
		document.getElementById("fname").value = Nmen ;
		document.getElementById("lname").value = Snmen ;
		document.getElementById("emailn").value = usrn ;
		document.getElementById("userID").value = usrIDn ;
		document.getElementById("tokennna").value = tokena ;
		
}

//////////////////

function getUrsDetailsNewCard(){
//document.getElementById("naappform").className = "showform";

 var usrn = localStorage.getItem("myUserName");
		  var usrIDn = localStorage.getItem("myUserID");
	     var Nmen = localStorage.getItem("myName");
         var Snmen = localStorage.getItem("mySname");
		var acnn = localStorage.getItem("myAccNo");
		var tokena = localStorage.getItem("myToken");
	//alert(" usr " + usrn + " usrID " + usrIDn + " Name " + Nmen + " Srname " + Snmen + " AccNo " + acnn );
		document.getElementById("usridHeadna").innerHTML = "User ID:  " + usrIDn ;
		document.getElementById("fname").value = Nmen ;
		document.getElementById("lname").value = Snmen ;
		document.getElementById("emailn").value = usrn ;
		document.getElementById("userID").value = usrIDn ;
		document.getElementById("tokennna").value = tokena ;
		//alert("Sfgsg");
		var selectTempCrd ="<option value='" + acnn + "'>" + acnn + "</option>";
		document.getElementById("selectAccCard").innerHTML = selectTempCrd ; 
	//AccNoget();
	
		
}
/////
function getUrsDetailsUploadDoc(){
//document.getElementById("naappform").className = "showform";
 var usrn = localStorage.getItem("myUserName");
		  var usrIDn = localStorage.getItem("myUserID");
	     var Nmen = localStorage.getItem("myName");
         var Snmen = localStorage.getItem("mySname");
		var acnn = localStorage.getItem("myAccNo");

	//alert(" usr " + usrn + " usrID " + usrIDn + " Name " + Nmen + " Srname " + Snmen + " AccNo " + acnn );
	//document.getElementById("usridHeadna").innerHTML = "User ID:  " + usrIDn ;
		//document.getElementById("fname").value = Nmen ;
	//document.getElementById("lname").value = Snmen ;
		document.getElementById("userEmail").value = usrn ;
		document.getElementById("useriddc").value = usrIDn ;
		
		
}


function getUrsDetailsTest(){

localStorage.setItem("myUserName", Email);
localStorage.setItem("myName", Name);
localStorage.setItem("mySname", Surname);
localStorage.setItem("myEmail", Email);
localStorage.setItem("myUserID", Userid);
localStorage.setItem("myN3tcToken", Tokenkey);
localStorage.setItem("myPassword", Password);
localStorage.setItem("myCompanyName", Companyname);
localStorage.setItem("myCompanyReg", Companyreg);
localStorage.setItem("myCell", Cell);
localStorage.setItem("myHomeTel", Home);
localStorage.setItem("myWorkTel", Work);
localStorage.setItem("myFax", Fax);
localStorage.setItem("myIdentityNo", Identityno);
localStorage.setItem("myDistrict", District);
localStorage.setItem("myPhyadd", Phyaddress);
localStorage.setItem("myPostal", Postal);

document.getElementById("UserName").value = localStorage.getItem("myUserName");
document.getElementById("Name").value = localStorage.getItem("myName");
document.getElementById("Sname").value = localStorage.getItem("mySname");
document.getElementById("Email").value = localStorage.getItem("myEmail");
document.getElementById("UserID").value = localStorage.getItem("myUserID");
document.getElementById("N3tcToken").value = localStorage.getItem("myN3tcToken");
document.getElementById("Password").value = localStorage.getItem("myPassword");
document.getElementById("CompanyName").value = localStorage.getItem("myCompanyName");
document.getElementById("CompanyReg").value = localStorage.getItem("myCompanyReg");
document.getElementById("Cell").value = localStorage.getItem("myCell");
document.getElementById("HomeTel").value = localStorage.getItem("myHomeTel");
document.getElementById("WorkTel").value = localStorage.getItem("myWorkTel");
document.getElementById("Fax").value = localStorage.getItem("myFax");
document.getElementById("IdentityNo").value = localStorage.getItem("myIdentityNo");
document.getElementById("District").value = localStorage.getItem("myDistrict");
document.getElementById("Phyadd").value = localStorage.getItem("myPhyadd");
document.getElementById("Postal").value = localStorage.getItem("myPostal");

	//alert(" usr " + usrn + " usrID " + usrIDn + " Name " + Nmen + " Srname " + Snmen + " AccNo " + acnn );

		
	//	AccNoget();
	
		
}
////////////////////////////////////////////////////////////////
function docStatus(){
	var dStat = document.getElementById("docConfirm").value;
	 document.getElementById("docStat").value = dStat;
	}
	
function appStatus(){
	var apStat = document.getElementById("appConfirm").value;
	 document.getElementById("appStat").value = apStat;
    if(apStat == Completed){$("#addanother").css("display", "none");
    $("#addveh").css("display", "none");
    }else{
        $("#addanother").css("display", "block");
         $("#addveh").css("display", "block");
    }
	}


	  
	  
function PopulateProfile(){
document.getElementById("UserName").value = localStorage.getItem("myUserName");
document.getElementById("Name").value = localStorage.getItem("myName");
document.getElementById("Sname").value = localStorage.getItem("mySname");
document.getElementById("Email").value = localStorage.getItem("myEmail");
document.getElementById("UserID").value = localStorage.getItem("myUserID");
document.getElementById("N3tcToken").value = localStorage.getItem("myN3tcToken");
document.getElementById("Password").value = localStorage.getItem("myPassword");
document.getElementById("CompanyName").value = localStorage.getItem("myCompanyName");
document.getElementById("CompanyReg").value = localStorage.getItem("myCompanyReg");
document.getElementById("Cell").value = localStorage.getItem("myCell");
document.getElementById("HomeTel").value = localStorage.getItem("myHomeTel");
document.getElementById("WorkTel").value = localStorage.getItem("myWorkTel");
document.getElementById("Fax").value = localStorage.getItem("myFax");
document.getElementById("IdentityNo").value = localStorage.getItem("myIdentityNo");
document.getElementById("District").value = localStorage.getItem("myDistrict");
document.getElementById("Phyadd").value = localStorage.getItem("myPhyadd");
document.getElementById("Postal").value = localStorage.getItem("myPostal");
	
}

function PopulateCDA(){

var firstname = localStorage.getItem("myName");
var lastname = localStorage.getItem("mySname");
document.getElementById("userName").value = firstname + " " + lastname;
document.getElementById("userEmail").value = localStorage.getItem("myUserName");
document.getElementById("userid").value = localStorage.getItem("myUserID");
document.getElementById("coName").value = localStorage.getItem("myCompanyName");
document.getElementById("coReg").value = localStorage.getItem("myCompanyReg");
document.getElementById("cntCell").value = localStorage.getItem("myCell");
document.getElementById("cntHome").value = localStorage.getItem("myHomeTel");
document.getElementById("cntWrk").value = localStorage.getItem("myWorkTel");
document.getElementById("cntFax").value = localStorage.getItem("myFax");
document.getElementById("idNo").value = localStorage.getItem("myIdentityNo");
document.getElementById("Magisterial").value = localStorage.getItem("myDistrict");
document.getElementById("Physical").value = localStorage.getItem("myPhyadd");
document.getElementById("Postal").value = localStorage.getItem("myPostal");
	
}

function updateProfile(){

var Email = document.getElementById("Email").value;
var Companyname = document.getElementById("CompanyName").value;
var Companyreg = document.getElementById("CompanyReg").value;
var Cell = document.getElementById("Cell").value;
var Home = document.getElementById("HomeTel").value;
var Work = document.getElementById("WorkTel").value;
var Fax = document.getElementById("Fax").value;
var Identityno = document.getElementById("IdentityNo").value;
var District = document.getElementById("District").value;
var Phyaddress = document.getElementById("Phyadd").value;
var Postal = document.getElementById("Postal").value;	

		
//localStorage.setItem("myUserName", Username);
//localStorage.setItem("myName", Name);
//localStorage.setItem("mySname", Surname);
localStorage.setItem("myEmail", Email);
//localStorage.setItem("myUserID", Userid);
//localStorage.setItem("myN3tcToken", Tokenkey);
//localStorage.setItem("myPassword", Password);
localStorage.setItem("myCompanyName", Companyname);
localStorage.setItem("myCompanyReg", Companyreg);
localStorage.setItem("myCell", Cell);
localStorage.setItem("myHomeTel", Home);
localStorage.setItem("myWorkTel", Work);
localStorage.setItem("myFax", Fax);
localStorage.setItem("myIdentityNo", Identityno);
localStorage.setItem("myDistrict", District);
localStorage.setItem("myPhyadd", Phyaddress);
localStorage.setItem("myPostal", Postal);

}

function showhide(){
	if(document.getElementById("apptype").value == "Individual"){
		document.getElementById("coName").innerHTML = " ";
		document.getElementById("coReg").innerHTML = " ";
	document.getElementById("coName").setAttribute("type", "hidden");
	document.getElementById("coReg").setAttribute("type", "hidden");
	document.getElementById("coregl").style.display = "none";
	document.getElementById("conamel").style.display = "none";}
	else
	{document.getElementById("coName").setAttribute("type", "text");
	document.getElementById("coReg").setAttribute("type", "text");
	document.getElementById("coregl").style.display = "block";
	document.getElementById("conamel").style.display = "block";}
	
}

function locReload(){
location.reload();	
}

function populateDelay() {
    myVar = setTimeout(PopulateProfile, 1500);
	
}

function populateCDADelay() {
    myVar = setTimeout(PopulateCDA, 1500);
	
}

function populateAccDelay() {
    myVar = setTimeout(AccFeedLTD, 1500);
	
}

function populateAppDelay() {
    myVar = setTimeout(CdaFeed, 1500);
	
}

///search by all accs
function searchAllAcc(){
   //alert(id);
  document.getElementById("accH1").innerHTML = "All Accounts";
  document.getElementById("CardNo").innerHTML = "Identifiers for All Accounts";
  
 // TransactionFeed();
 TransactionFeedbyAccount();
$( "#setx" ).collapsible( "collapse" );
$( "#set2" ).collapsible( "expand" );

  // GetForAcc();
        
}



/////pass elementID
function myFunc(id){
   //alert(id);
  document.getElementById("accH1").innerHTML = "  Account " + id;
  document.getElementById("CardNo").innerHTML = "Identifiers for Acc " + id;
  var ulHidden = "ul" + id;
//  if  (document.getElementById(ulHidden).style.display == "none"){
 //document.getElementById(ulHidden).style.display = "block";} else {document.getElementById(ulHidden).style.display = "none";}
  localStorage.setItem("currentAccNo", id);
// if(document.getElementById(id).style.backgroundColor == "rgb(63, 64, 64)"){
//	document.getElementById(id).style.backgroundColor = "#333";}
	//else{
 // document.getElementById(id).style.backgroundColor = "rgb(63, 64, 64)";}
  
// document.getElementById("setx").setAttribute("aria-hidden" , "true");
TransactionFeed();
$( "#setx" ).collapsible( "collapse" );
$( "#set2" ).collapsible( "expand" );
document.getElementById("set4").removeAttribute("hidden");
document.getElementById("set2").removeAttribute("hidden");


//var btnID ="'#" + id + "'";

 // $(btnID).addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
  // GetForAcc();
        
}
function colapseTags(){
	
	
}


function cardFunc(id){
   //alert(id);
  
  var ulHidden2 = "ulc" + id;
  if  (document.getElementById(ulHidden2).style.display == "none"){
  document.getElementById(ulHidden2).style.display = "block";} else {document.getElementById(ulHidden2).style.display = "none";}
  document.getElementById("CardNo").innerHTML = "  Tag No : " + id;
  localStorage.setItem("currentCardNo", id);
 if(document.getElementById(id).style.backgroundColor == "rgb(63, 64, 64)"){
	document.getElementById(id).style.backgroundColor = "#333";}
	else{
  document.getElementById(id).style.backgroundColor = "rgb(63, 64, 64)";}
//var btnID ="'#" + id + "'";

 // $(btnID).addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
  // GetForAcc();
        
}



function vehicleFunc(id){
   //alert(id);
    var ulHidden3 = "ulv" + id;
  if  (document.getElementById(ulHidden3).style.display == "none"){
  document.getElementById(ulHidden3).style.display = "block";} else {document.getElementById(ulHidden3).style.display = "none";}
  document.getElementById("VehicleNo").innerHTML = "  Reg " + id;
  localStorage.setItem("currentVehicle", id);
 if(document.getElementById(id).style.backgroundColor == "rgb(63, 64, 64)"){
	document.getElementById(id).style.backgroundColor = "#333";}
	else{
  document.getElementById(id).style.backgroundColor = "rgb(63, 64, 64)";}
//var btnID ="'#" + id + "'";

 // $(btnID).addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
  // GetForAcc();
        
}

function transFunc(id){
   //alert(id);
    var ulHidden4 = "ult" + id;
  if  (document.getElementById(ulHidden4).style.display == "none"){
  document.getElementById(ulHidden4).style.display = "block";} else {document.getElementById(ulHidden4).style.display = "none";}
  //document.getElementById("VehicleNo").innerHTML = "  Reg " + id;
 // localStorage.setItem("currentVehicle", id);
 if(document.getElementById(id).style.backgroundColor == "rgb(63, 64, 64)"){
	document.getElementById(id).style.backgroundColor = "#333";}
	else{
  document.getElementById(id).style.backgroundColor = "rgb(63, 64, 64)";}
//var btnID ="'#" + id + "'";

 // $(btnID).addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
  // GetForAcc();
        
}



function cdaFunc(id){
   //alert(id);
    var ulHidden5 = "ul" + id;
  if  (document.getElementById(ulHidden5).style.display == "none"){
  document.getElementById(ulHidden5).style.display = "block";} else {document.getElementById(ulHidden5).style.display = "none";}
  //document.getElementById("VehicleNo").innerHTML = "  Reg " + id;
 // localStorage.setItem("currentVehicle", id);
 if(document.getElementById(id).style.backgroundColor == "rgb(63, 64, 64)"){
	document.getElementById(id).style.backgroundColor = "#333";}
	else{
  document.getElementById(id).style.backgroundColor = "rgb(63, 64, 64)";}
//var btnID ="'#" + id + "'";

 // $(btnID).addClass('ui-icon-check ui-btn-icon-left ui-btn-b ui-btn-active'); 
  // GetForAcc();
        
}

function ttFunc(id){ //alert(id);
   //alert(id);
   localStorage.setItem("currentTag" , id);
//document.getElementById("CardNo").innerHTML = id;
 // document.getElementById("TransNo").innerHTML = "Transactions - " + id;
  document.getElementById("CardNo").innerHTML = "Identifier - " + id; 
  TransactionFeedbyTag();    
  $( "#setx" ).collapsible( "collapse" );
	$( "#set2" ).collapsible( "collapse" );
	$( "#set4" ).collapsible( "expand" );  
}

function clearAllSet(){

document.getElementById("setTag").innerHTML = "";
//document.getElementById("setVehicle").innerHTML = " ";
document.getElementById("setTrans").innerHTML = "";
document.getElementById("setApps").innerHTML = "";
//document.getElementById("accH1").innerHTML = "Accounts";
//document.getElementById("setAcc").innerHTML = "";

}


//////////ACC LTD

function AccFeedLTD(){
	points = gettAccData();
	//alert("getprod..");
//	document.getElementById("listData").innerHTML = "";
	//document.getElementById("setAcc").innerHTML = "";
	
	
	for (pointIndex = 0; pointIndex < points.length && pointIndex < 500; pointIndex++) {
        			point = points[pointIndex];
										
var AccNo = point.accno;
var UserID = point.userid;
var AccStatus = point.accstatus;
var StatusFeedback  = point.statusfeedback ;
var Notification = point.notification;

//Filter acc
var filterAcc = localStorage.getItem("myUserID");//alert("filteracc " + filterAcc);
//var tempJoin = "1;#" + filterAcc; //alert("tmpjiun " +tempJoin);	
	if (filterAcc == UserID){
		accNox	= point.accno;		
		localStorage.setItem("myAccNo", accNox);
		
						
								
					var lstTemp = "<li class='ui-li-static ui-body-inherit ui-corner-all ui-last-child ui-btn ui-btn-icon-left ui-icon-check' id='" + AccNo + "' onclick='myFunc(this.id);'>" + "Acc " + AccNo  + "<ul data-divider-theme='a'  style=' display: none; ' id='" + "ul" + AccNo + "' ><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + UserID + "</li><li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "Account " + AccStatus + "</li>" + "<li class='ui-btn ui-mini' style=' background-color: #325282; width: 120%; text-align: left;'>" + "Notes: " + StatusFeedback + "</li></ul> </li>" ; 
					//document.getElementById("listData").innerHTML += lstTemp;
			
					//document.getElementById("setAcc").innerHTML += lstTemp; 
					
					
					var selectTemp ="<option value='" + AccNo + "'>" + AccNo + "</option>";
					
					try {document.getElementById("selectAcc").innerHTML += selectTemp;}
					catch(err) {
   // alert(err.message);
}
					
					try {document.getElementById("selectAcc2").innerHTML += selectTemp;}
					catch(err) {
   // alert(err.message);
}
							
					
}//userFilter
			//if (status == "Incomplete"){alert("Incomplete got"); }
	}


}

//END ACC

function linkBind(){
	var reg = document.getElementById("v1Registration").value;
	var usrId = document.getElementById("userid").value;
	document.getElementById("v1linkid").value = "http://n3tc100docx/_layouts/15/start.aspx#/Lists/VehiclesApplication/AllItems.aspx#InplviewHashfe2c0f45-61eb-4a5e-9b37-9331d721b540=FilterField1=ApplicationID-FilterValue1=" + usrId + reg;

}


	







