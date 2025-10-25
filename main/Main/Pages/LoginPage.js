const { expect } = require("@playwright/test");
const { clickWithTimeout, fillWithTimeout } = require("../CommonUtils/commonFunctions");
const { time } = require("node:console");
const { readDataFromExcelFile } = require("../CommonUtils/ExcelHelper.js");
//import { test } from "@playwright/test";

class LoginPage{

    constructor(page){
        this.page = page;

        //Excel Data
         this.ExcelDataProvider = readDataFromExcelFile('Century_Data.xlsx');


        this.myAccount = page.locator("//span[contains(text(),'AddOns')]");

         this.later=page.locator("//button[text()='Later']");
         this.employeeId=page.locator("//*[@placeholder='Please Enter Employee ID / Agent ID']");
         this.password=page.locator("//*[@placeholder='Please Enter Password']");
         this.signInButton=page.locator("//*[contains(text(),' Continue ')]");
         this.otpFilling=page.locator("//*[@id='otp-input-0']");

         //onboard new customer onwards
         this.onboardNewCustomerButton=page.locator("//*[contains(text(), 'Onboard New Customer ')]");
         this.toggleButtonNoYEs=page.locator("//*[contains(@class,'slider')]");
         this.nextButton=page.locator("//*[contains(text(),' Proceed ')]");

         // Know Your Customer Page
         this.customerEmailID=page.locator("//*[@placeholder='Please enter email ID']");
         this.customerMobileNumber=page.locator("//*[@placeholder='Please enter Mobile Number']");
         this.quicklyFillFromAadhaarButton=page.locator("//*[contains(text(),' Quickly Fill Information from Aadhaar')]");
         this.aadharInputTextBox=page.locator("//*[contains(@placeholder,'xxxx xxxx 1234')]");
         this.checkBox=page.locator("//*[@name='ischecked']");
         this.generateCodeButton=page.locator("//*[contains(text(),' Generate Code ')]");
         this.verifyCodeButton=page.locator("//*[contains(text(),'Verify Code')]");
         this.customersPansDetails=page.locator("//*[contains(@placeholder,'xxxxxx123A')]");
         this.saveAndProceedButton=page.locator("//*[normalize-space(text())='Save & Proceed']//i");

         // Personal Info Page 
         this.fathersFirstNameWait="//*[@class='row']//label[contains(text(),'Father')]/..//i//following-sibling::div//*[@placeholder='First Name']";
         this.fathersFirstName=page.locator("//*[@class='row']//label[contains(text(),'Father')]/..//i//following-sibling::div//*[@placeholder='First Name']");
         this.fathersLastName=page.locator("//*[@class='row']//label[contains(text(),'Father')]/..//i//following-sibling::div//*[@placeholder='Last Name']");
         this.mothersFirstName=page.locator("//*[@class='row']//label[contains(text(),'Mother')]/..//i//following-sibling::div//*[@placeholder='First Name']");
         this.mothersLastName=page.locator("//*[@class='row']//label[contains(text(),'Mother')]/..//i//following-sibling::div//*[@placeholder='Last Name']");
         this.dateOfBirth=page.locator("//*[@class='row']//label[contains(text(),'Date of Birth')]/..//i//following-sibling::div//*[@placeholder='DD/MM/YYYY']");


         // personal Info Customer Profile

         this.customerEducationField=page.locator("//img[contains(@src,'graduation-cap')]/../..//input");
         this.customerOccupationWorkplace=page.locator("//img[contains(@src,'briefcase')]/../..//input");
         this.customerAnnualIncome=page.locator("//img[contains(@src,'wallet')]/../..//input");
         this.gradusteSelection=page.locator("//span[contains(text(),'Graduate')]");
         this.customerOccupation=page.locator("//span[contains(text(),'Service - G')]");

         this.customerWorkPlace=page.locator("//*[contains(text(),'Customer Work Place')]/..//input");

         this.customerJobProfileInput=page.locator("//label[contains(text(),'Customer Job Profile')]/..//input");
         this.customerJobProfileSelection =page.locator("//span[contains(text(),'Accounts')]");


         // Bank Details
         this.bankAccountNumber=page.locator("//*[@name='accountNumber']");
         this.confirmBankAccountNumber=page.locator("//*[@name='confirmaccountNumber']");
         this.bankIFSCcode=page.locator("//*[@name='ifscCode']");

         this.validateButton=page.locator("//*[contains(text(),'Validate')]");
         this.noButton=page.locator("//*[contains(text(),' No ')]");
         this.yesButton=page.locator("//*[contains(text(),'Yes')]");
         this.okButton=page.locator("//*[contains(text(),'Ok')]");

         // Need Analysis And Quotes page
                      // same as above
                       // this.saveAndProceedButton=page.locator("//button[contains(text(),'Save & Proceed')]//i");
         this.productSelection= page.locator("//div[contains(text(),' PNB MetLife Century Plan ')]/..//i[contains(@class,'metplancartplus')]");
         this.metPlanFinalizeButton=page.locator("//div[contains(@class,'metplanfinalise')]");
         this.continueWithoutBackdate=page.locator("//*[contains(text(),' Continue without Backdate ')]");
         this.recalculateButton=page.locator("//*[contains(text(), 'Recalculate')] ");
         this.getQuoteButton=page.locator("//*[contains(text(), ' Get Quote ')] ");
         this.proceedAheadButton=page.locator("//*[contains(text(), 'Proceed Ahead')] ");
         this.proceedButton=page.locator("//*[normalize-space(.)='Proceed'] ");
         

        // Additional Info Page

        this.continueButton=page.locator("//button[normalize-space(.)='Continue'] ");
        this.noneOfTheProvidedOption=page.locator("//label[contains(text(),'None of the provided options')]");
        // Ok button is in the xapath;
        // Ok button is in the xapath;
        // save and proceed button is in the xpath
        //
        this.cirlSelection=page.locator("//label[contains(text(),' Central Insurance')]");
        // save and proceed button is in the xpath
        

         //Additional Info  Nominee Page
        this.numberOfNominee=page.locator("//*[contains(@class,'container')]//*[contains(text(),'select the number nominees to be added')]/..//input");
        this.numberOfNomineeSelection=page.locator("//*[@role='option']//*[contains(normalize-space(.),'1')]");
        this.nomineeRelationWithPolicyInsured=page.locator("//div[contains(text(),'Please select the relationship of nominee with policy insured')]/..//input");
        this.nomineeRelationWithPolicyInsuredSelection=page.locator("//*[@role='option']//*[contains(normalize-space(.),'Father')]");

       this.nomineeFirstName=page.locator ("//input[@placeholder='First Name' and @formcontrolname='firstName']");
           this.nomineeLastName=page.locator ("//input[@placeholder='Last Name' and @formcontrolname='lastName']");
           this.dob=page.locator ("//input[@formcontrolname='nomineeDob']");
           this.nomineeMobileNumber=page.locator ("//input[@formcontrolname='nomineeMobileNo']");
           this.nomineeEmailID=page.locator ("//*[@formcontrolname='nomineeEmailId']");
           this.nomineeAccountNumber=page.locator ("//*[@formcontrolname='nomineeAccountNumber']");
           this.bankAccountType=page.locator("//*[contains(text(),' Savings ')]");
           this.nomineeIfscCode=page.locator ("//*[@formcontrolname='ifcsCode']");
         this.saveButton=page.locator("//*[contains(text(), 'Save ')]");


         // Lifestyle And Health Page
         this.hightAndWeight=page.locator("//input[@role='combobox']");
         this.sixFeetSelection=page.locator("//*[contains(text(),'6 Feet 0 Inches = 183 cms')]");
          this.seventySevenSelection=page.locator("//*[contains(text(),'77 kg')]");

          // Agent Page
            this.agentCode=page.locator("//label[contains(text(),'Agent Code :')]/..//input");
            this.agentcodeSelection=page.locator("//*[@class='indent']");
            this.chooseBankEmployee=page.locator("//label[contains(text(),'Choose Bank Employee :')]/..//input");
            this.chooseBankEmployeeSelection=page.locator("//div[@role='option']//span");

            this.specifiedPersonCode=page.locator("//label[contains(text(),'Specified Person Code:')]/..//input");
            this.specifiedPersonSelection=page.locator("//div[@role='option']//span");

             this.offlineSelection=page.locator(" //*[contains(text(),'Offline')] ");
           

             // payment Info Page
             
             this.policyOwnerButton=page.locator("//*[text()=' Policy Owner ']");
             this.firstPaymentMode=page.locator("//*[contains(text(),' Please select the First Premium Payment Mode ')]/..//input");
             this.chequePaymentSelection=page.locator("//*[contains(text(),'Cheque Payment')]");
             this.chequeNo=page.locator("//input[@formcontrolname='ChequeNo']");
             this.chequeDate=page.locator("//input[@formcontrolname='ChequeDate']");
             this.renewalPaymentMethod=page.locator("//label[contains(text(),'Renewal Payment Method')]/..//input");
             this.chequeSelection=page.locator("//*[contains(text(),'Cheque/Demand Draft/Cash')]");
             this.OkButtonAfterCheque=page.locator("//*[contains(text(),'OK')]");








    }


   // const ExcelDataProvider = readDataFromExcelFile('Century_Data.xlsx');

    async loginToApplication(i){
      try{
         let employeeID = this.ExcelDataProvider[i].User_ID;
         console.log("-------------------------------"+employeeID);
         
         let password = this.ExcelDataProvider[i].Password;
         console.log(this.ExcelDataProvider.length);
         for(let i=0;i<this.ExcelDataProvider.length;i++){
            const row = this.ExcelDataProvider[i];
           // console.log(`Processing row: ${JSON.stringify(row)}`);
          employeeID = row.User_ID;
          password = row.Password;
         console.log(employeeID);
         console.log(password);
         }
         
        await fillWithTimeout(this.employeeId,this.ExcelDataProvider[i].User_ID.toString(),20000);
        await fillWithTimeout(this.password,this.ExcelDataProvider[i].Password.toString(),20000);
        await clickWithTimeout(this.signInButton,20000);
       // await this.page.waitForTimeout(5000);
        for(let i=0;i<=5;i++){
      let j = (i+1).toString();
       await this.page.locator(`//*[@id='otp-input-${i}']`).fill(j);
    }
        console.log(" ✅ login successfully");
        console.log(" ✅ Title verified");

   

        }catch(error){
        console.log("Error in onboard new customer"+error);
       }
    }

    async onboardNewCustomerFillForm(i){
        try{
         await this.page.waitForTimeout(5000);
        await clickWithTimeout(this.onboardNewCustomerButton,3000);
        await this.page.waitForTimeout(3000);
        await clickWithTimeout(this.toggleButtonNoYEs,3000);
        await clickWithTimeout(this.nextButton,3000);
        console.log("Onboard new customer successfully");
        await this.page.waitForTimeout(5000);
       }catch(error){
        console.log("Error in onboard new customer"+error);
       }
    }

     async onboardNewCustomerFillForm(i){
        try{
         await this.page.waitForTimeout(5000);
        await clickWithTimeout(this.onboardNewCustomerButton,30000);
        await clickWithTimeout(this.toggleButtonNoYEs,30000);
        await clickWithTimeout(this.nextButton,3000);
        console.log("Onboard new customer successfully");
        await this.page.waitForTimeout(5000);
       }catch(error){
        console.log("Error in onboard new customer"+error);
       }
    }

     async knowYourCustomerForm(i){
        try{       
        await fillWithTimeout(this.customerEmailID,this.ExcelDataProvider[i].Customer_EmailID.toString(),20000);
        await fillWithTimeout(this.customerMobileNumber,this.ExcelDataProvider[i].Customer_MobileNo.toString(),20000);
        await clickWithTimeout(this.quicklyFillFromAadhaarButton,20000);
         await this.page.waitForTimeout(2000);
        await fillWithTimeout(this.aadharInputTextBox,this.ExcelDataProvider[i].Adhar_No.toString(),20000);
        await clickWithTimeout(this.checkBox,20000);
        await clickWithTimeout(this.generateCodeButton,20000);
        for(let i=0;i<=5;i++){
       await this.page.locator(`//*[@id='otp-input-${i}']`).fill("2");
    }
         await clickWithTimeout(this.verifyCodeButton,20000);
         await fillWithTimeout(this.customersPansDetails,this.ExcelDataProvider[i].Pancard.toString(),20000);
         await clickWithTimeout(this.saveAndProceedButton,20000);
        console.log("Know your customer form filled successfully");

       }catch(error){
        console.log("Error in Know your customer form "+error);
       }
    }

    async personalInfoBasicDetails(i){
         try{  
         //   await this.page.waitForSelector(this.fathersFirstNameWait,{state:'visible',timeout:30000});  
         await fillWithTimeout(this.fathersFirstName,"John",30000);
         await fillWithTimeout(this.fathersLastName,"Doe",30000);
         await fillWithTimeout(this.mothersFirstName,"Jane",30000);
         await fillWithTimeout(this.mothersLastName,"Doe",30000);         
         await this.saveAndProceedButton.scrollIntoViewIfNeeded();
         await clickWithTimeout(this.saveAndProceedButton,30000);
         console.log("Personal info basic details filled successfully");
       
         } catch(error){
            console.log("Error in personal info basic details"+error);
         }
    }

     async secpersonalInfoCustomerProfileDetails(){
         try{ 
            let place ="Gurugram, Sev 40, Haryana, 122001, India ";
          await clickWithTimeout(this.customerEducationField,20000);
          await clickWithTimeout(this.gradusteSelection,20000);
          await clickWithTimeout(this.customerOccupationWorkplace.first(),20000);
          await clickWithTimeout(this.customerOccupation,20000);
          await clickWithTimeout(this.customerJobProfileInput,25000);
          await clickWithTimeout(this.customerJobProfileSelection,20000);          
          await fillWithTimeout(this.customerAnnualIncome,"500000",20000);
         await clickWithTimeout(this.customerWorkPlace,20000);
         await this.customerWorkPlace.pressSequentially("MumbaiDelhi", { delay: 500 });
         await this.saveAndProceedButton.click();
         
          console.log("Personal info Customer Profile details filled successfully");
         } catch(error){
            console.log("Error in personal info Customer Profile details"+error);
         }
    }


    async bankDetailsSelection(i){
         try{   
            console.log("In bank details selection"); 
          await fillWithTimeout(this.bankAccountNumber,"32441345345",20000);
          await fillWithTimeout(this.confirmBankAccountNumber,"32441345345",20000);
          await fillWithTimeout(this.bankIFSCcode,"SBIN0008549",20000);
          await clickWithTimeout(this.validateButton,20000);
          await clickWithTimeout(this.noButton,20000);
          await clickWithTimeout(this.okButton,20000);
          await clickWithTimeout(this.saveAndProceedButton,20000);
          console.log("Bank Details filled successfully");
         // await this.page.waitForTimeout(2000);  
         } catch(error){
            console.log("Error in Bank Details filled"+error);
         }
    }

    async needAnalysisAndQuoteSection(i){
         try{   
            console.log("In need analysis and quote section"); 
          await clickWithTimeout(this.saveAndProceedButton,20000);
           await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.productSelection.first(),20000);
            await clickWithTimeout(this.metPlanFinalizeButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.continueWithoutBackdate,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.recalculateButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.getQuoteButton,20000);
           await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.proceedAheadButton,20000);
            await clickWithTimeout(this.continueButton,20000);
            
            await clickWithTimeout(this.proceedButton.last(),20000);
            
          console.log("Need analysis and quote section filled successfully");
         // await this.page.waitForTimeout(2000);  
         } catch(error){
            console.log("Error in Need analysis and quote section filled"+error);
         }
    }



    

     async additionalInfoPageAction(i){
         try{   
            console.log("In additional info page action"); 
            await clickWithTimeout(this.validateButton,20000);
            await clickWithTimeout(this.toggleButtonNoYEs,20000);
            await clickWithTimeout(this.continueButton,20000);
            await clickWithTimeout(this.noneOfTheProvidedOption,20000);
            await clickWithTimeout(this.okButton,20000);
            await clickWithTimeout(this.okButton.last(),20000);
            
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.cirlSelection,20000);
             await clickWithTimeout(this.saveAndProceedButton,20000);
           // await clickWithTimeout(this.noneOfTheProvidedOption,20000);
            

            
          console.log("In additional info page action filled successfully");
         // await this.page.waitForTimeout(2000);  
         } catch(error){
            console.log("Error In additional info page action section filled"+error);
         }
      }

      async nomineePageInfo(i){
         try{
             await clickWithTimeout(this.numberOfNominee,20000);
             await clickWithTimeout(this.numberOfNomineeSelection,20000);
            await clickWithTimeout(this.nomineeRelationWithPolicyInsured,20000);
            await clickWithTimeout(this.nomineeRelationWithPolicyInsuredSelection.first(),20000);
           await clickWithTimeout(this.dob,20000);
            await fillWithTimeout(this.dob,'01-01-1970',20000);
            
            await fillWithTimeout(this.nomineeMobileNumber,'9876543210',20000);
            await fillWithTimeout(this.nomineeEmailID,'TestNomineeEmail@test.com',20000); 
            await fillWithTimeout(this.nomineeAccountNumber,'1234567890',20000); 
            await clickWithTimeout(this.bankAccountType,20000);
            await fillWithTimeout(this.nomineeIfscCode,'ICIC0000001',20000);
            await clickWithTimeout(this.saveButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);


             console.log("In additional info Nomineepage action filled successfully");
         }
         catch(e){

             console.log("In additional info Nomineepage action filled successfully");
         }
      }


      async lifestyleAndHealthPageAction(i){
         try{
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);         
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.hightAndWeight.first(),20000);     
            await this.hightAndWeight.first().pressSequentially("6", { delay: 500 });
            await clickWithTimeout(this.sixFeetSelection,20000);
            
            await clickWithTimeout(this.hightAndWeight.last(),20000);
            await this.hightAndWeight.last().pressSequentially("77", { delay: 500 }); 
            await clickWithTimeout(this.seventySevenSelection,20000);  
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
            console.log("In Lifestyle And Health Page action filled successfully");       
         } catch(error){   
            console.log("Error In Lifestyle And Health Page action section filled"+error);
         }
      }

      async agentPageAction(i){
         try{
            await clickWithTimeout(this.agentCode,20000);      
            await clickWithTimeout(this.agentcodeSelection,20000);
            await clickWithTimeout(this.chooseBankEmployee,20000);
            await clickWithTimeout(this.chooseBankEmployeeSelection.first(),20000);
            await clickWithTimeout(this.specifiedPersonCode,20000);
            await clickWithTimeout(this.specifiedPersonSelection,20000) ;  
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.offlineSelection.first(),20000);
            await clickWithTimeout(this.offlineSelection.last(),20000); 
            await clickWithTimeout(this.saveAndProceedButton,20000);
          console.log("Sucessfill Agent Code");
          
         }
         catch(e){
          console.log("Error in agent page action"+e);
         }  
      }   

        async paymentInfoPageAction(i){
         try{

            await clickWithTimeout(this.policyOwnerButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
             await this.page.pause();
            await clickWithTimeout(this.firstPaymentMode,20000);
            await clickWithTimeout(this.chequePaymentSelection,20000);
           // await clickWithTimeout(this.chequeNo,20000);
            await fillWithTimeout(this.chequeNo,"123456",20000);
          //  await clickWithTimeout(this.chequeDate,20000);
            await fillWithTimeout(this.chequeDate,"01-oct-2025",20000);
            await clickWithTimeout(this.saveAndProceedButton,20000); 
            await clickWithTimeout(this.renewalPaymentMethod,20000);
            await clickWithTimeout(this.chequeSelection,20000);
            await clickWithTimeout(this.OkButtonAfterCheque,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.saveAndProceedButton,20000);
           
           
          console.log("Sucessfull payment Info Page Action");
          
         }
         catch(e){
          console.log("Error in payment Info Page action"+e);
         }  
      }   


      async uploadDocumentsPageAction(i){
         try{
            await clickWithTimeout(this.saveAndProceedButton,20000);
            await clickWithTimeout(this.okButton,20000);
            //upload documents page action
          console.log("Sucessfull upload Documents Page Action");       

         } catch(error){   
            console.log("Error In upload Documents Page action section filled"+error);
         }
      }
               








}

module.exports = LoginPage;