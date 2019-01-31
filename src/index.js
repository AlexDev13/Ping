const ping=require('net-ping')
const tcpp = require('tcp-ping')
const DNS=require('dns')
const readLine=require('readline')
const session = ping.createSession ()
const pingT=ping.RequestTimedOutError
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
rl.question("Enter: ",(answer)=>{
            DNS.lookup(answer,(err,address,family)=>{
                  console.log(`Address of syte : ${address}, family is IPv-${family}`)
               session.pingHost(address,(err,target)=>{
 if(err)
        {
         if(error instanceof pingT) console.log(`${target} : Not Alive`)
         else console.log(`${target} : ${error.toString()}`)
            }
 else
    {
        tcpp.probe(answer,80,(err,available)=>{
            console.log(available)
        })
        tcpp.ping({address:answer},(err,data)=>{
            console.log(data)
        })
        console.log(`${target}: Alive`)
    }   
        })
    })
    rl.close()
})