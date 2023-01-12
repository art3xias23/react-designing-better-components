import {data} from '../../data'

export default function handler(req, res){
    console.log("API request made")
    res.status(200).json(JSON.stringify(data, null, 2));
    console.log(`response`)
    console.dir(res)

}