// basevarient price set by function
function updateBaseVarientCost(varientCostId)
{
    const baseVarientCost = document.getElementById(varientCostId);
    baseVarientCost.innerText=0;
    const baseVarientCostText = baseVarientCost.innerText; 
    totalPrice();
}
// high varient price set by function
function updateHighVarientCost(varientCostId,varient)
{
    const highVarientCost=document.getElementById(varientCostId);
    if(varient=="memory16Gb"|| varient=="storage1Tb")
        {highVarientCost.innerText=180;}
    else if(varient=="storage512Gb")
        {highVarientCost.innerText=100;}  
    else if(varient=="fastDelivery")
        {highVarientCost.innerText=20;} 
    const highVarientCostText = highVarientCost.innerText;
    totalPrice();
     
}
// total price calculate by function 
function totalPrice()
{
    // best price amount 
    const bestPrice=document.getElementById('bestPrice');
    const bestPriceAmount=parseInt(bestPrice.innerText);
    // memory cost amount 
    const memoryCost=document.getElementById('memoryCost');
    const memoryCostAmount=parseInt(memoryCost.innerText);
    // storage cost amount 
    const storageCost=document.getElementById('storageCost');
    const storageCostAmount=parseInt(storageCost.innerText);
    // delivery cost amount 
    const deliveryCost=document.getElementById('deliveryCost');
    const deliveryCostAmount=parseInt(deliveryCost.innerText);
    const totalPrice= bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    // total price updated 
    document.getElementById('totalPrice').innerText=totalPrice;
    document.getElementById('totalPriceWithPromo').innerText=totalPrice;
      
}
// memory cost for 8gb  varient
document.getElementById('memory8Gb').addEventListener('click',function()
{
    updateBaseVarientCost('memoryCost');
})
// memory cost for 16gb  varient
document.getElementById('memory16Gb').addEventListener('click',function()
{
    updateHighVarientCost('memoryCost','memory16Gb');
})
// extra storage cost for 256gb ssd varient
document.getElementById('ssd256Gb').addEventListener('click',function()
{
   updateBaseVarientCost('storageCost');
})
// extra storage cost for 512gb ssd varient
document.getElementById('ssd512Gb').addEventListener('click',function()
{
   updateHighVarientCost('storageCost','storage512Gb');
})
// extra storage cost for 1Tb varient varient
document.getElementById('ssd1Tb').addEventListener('click',function()
{
   updateHighVarientCost('storageCost','storage1Tb');
})
// delivery charge for prime delivery
document.getElementById('freeDelivery').addEventListener('click',function()
{
    updateBaseVarientCost('deliveryCost');
    
})
// delivery charge for fast delivery
document.getElementById('fastDelivery').addEventListener('click',function()
{
    updateHighVarientCost('deliveryCost','fastDelivery');

})
// promo code section 
document.getElementById('promoApplyButton').addEventListener('click',function()
{
    const totalPriceAmount= parseFloat(document.getElementById('totalPrice').innerText);
    const totalPriceWithPromo=document.getElementById('totalPriceWithPromo');
    const couponInputField= document.getElementById('couponField');
    const userPromo = couponInputField.value;
    if(userPromo.toLowerCase()=="stevekaku")
    {
        const discountPriceByPromo= (totalPriceAmount*20)/100;
        const updatedPrice= totalPriceAmount - discountPriceByPromo;
        totalPriceWithPromo.innerText = updatedPrice;
    }
    couponInputField.value="";
})