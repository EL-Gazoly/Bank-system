import React from 'react'

function DisplayTransfers(props) {
 const display = (props) => {
     const {transfers} =props;

if (transfers.length > 0){

  return (
    transfers.map((transfer,index) => {
        
      return(
        <tbody >
        <tr>
            <td className=" text-left py-3 px-4">{transfer.sender}</td>
              <td className="text-left py-3 px-4">{transfer.senderBalanceAfterTransfer}</td>
              <td className="text-left py-3 px-4">{transfer.recevier}</td>
              <td className="text-left py-3 px-4">{transfer.recevierBalanceAfterTransfer}</td>
              <td className="text-left py-3 px-4">{transfer.amount}</td>
          
          </tr>
          </tbody>
      
    )  
    })
    
    
  )
}
else {
    return (
        <h3> no transfers </h3>
    )
}

 }
  return(
      <>
               <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className=" bg-indigo-700 text-white">
              <tr>
                <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">Sender</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Current Balance</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Recevier</th>
                <th classNameName="text-left py-3 px-4 uppercase font-semibold text-sm">Current Balance </th>
                <th classNameName="text-left py-3 px-4 uppercase font-semibold text-sm">Amount </th>
              </tr>
            </thead>
         
            
       
      
            {display(props)}
        
            
          
          </table>
        </div>
      </div>
         
       
        
           
      </>
  )

}

export default DisplayTransfers 
 