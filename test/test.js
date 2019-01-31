const PingApp=require('../src/index')
const ping=require('net-ping')
const tcpp = require('tcp-ping')
const DNS=require('dns')
const readLine=require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })
describe("Определить IP адрес по имени сайта : ",()=>{
     it("Должен вернуть адрес сайта и Семейство записей: ",()=>{
        rl.question("Enter your domen: ",(answer)=>{
            DNS.lookup(answer,(err,address,family)=>{
                console.log('Address: ',address)
                console.log('family',family)
            })
            rl.close()
          })
     })
})
describe("IP",()=>{
    it("Проверяет на истинность введенного IP(по умолчанию-192.168.137.1): ",function(){
        rl.question("Enter your IP: ",(answer)=>{
            if(answer==IPAddress){
                console.log("Your IP is correctly!",IPAddress)
            }
            else{
                console.log("Error!!!")
                
            }
             rl.close()
           })
    })
})

describe("TCP/IP",()=>{
    it("Должен вернуть некоторые данные об адресе: ",()=>{

        tcpp.probe('64.233.165.101', 80,(err, available)=> {
            console.log(available)
        })
        
        tcpp.ping({ address: '64.233.165.101' },(err, data)=> {
            console.log(data)
        })
    })

})
