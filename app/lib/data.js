/**
 *         return {
            "url":"https://webservice.hobolink.com/ws/auth/token",
            "body":{
                "grant_type":"client_credentials",
                "client_id":self.__client_id,
                "client_secret":self.__client_secret
            },
            "headers":{
                'Accept':'application/json',
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }
 * 
 * 
 */

/**
 * 
 * {
            "url":f"https://webservice.hobolink.com/ws/data/file/{self.__format}/user/{self.__user_id}?loggers={self.__logger}&start_date_time={self.start_time}&end_date_time={self.end_time}",
            "body":{
                "loggers":[self.__logger],
                "start_date_time":self.start_time
            },
            "headers":{
                'Accept':'application/json',
                "authorization":f"Bearer {TOKEN}"
            }
        }
 */
import axios from "axios";

const URL_HOBOLINK = 'https://webservice.hobolink.com/ws/auth/token'
export async function conexionHoboLink() {
    let dataAccesToken = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': 'HoboUdePiura_WS',
        'client_secret': '002b4294da4b1cfc372dd771d8f2625652f36ff8' 
      });
      
      let configAccesToken = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_HOBOLINK,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : dataAccesToken
      };
      
    const response_TOKEN = await axios.post(configAccesToken);
    const json_TOKEN = await response_TOKEN.data
    
    

}