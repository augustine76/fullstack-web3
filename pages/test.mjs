import { create } from 'ipfs-http-client'
const projectID = "2Ep2BxEiGfjAwcTkHEDlkgREkBp";
const projectSecret = "ee300c30aaa0423d1d4c55b4ea84fd3a"

const auth = 'Basic ' + Buffer.from(projectID + ':' + projectSecret).toString('base64');
console.log(auth)
const test = async() => {
    const client = await create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
        headers: {
            authorization: auth,
        },
      });
      try{
          client.add('Hello World').then((res) => {
              console.log(res);
          });
      }catch(e){
          console.log(e);
      }
}
test();