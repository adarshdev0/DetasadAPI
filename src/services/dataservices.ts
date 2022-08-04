import { Response, Request } from "express";
import { createData, getAllData, getDataById,deleteData} from '../dao/dataqueries';


const newData = async (req : Request, res : Response) => {

    const {image, helmet, vest, timestamp, zone, camera, created_at, updated_at} = req.body;
    const Data = await createData(image, helmet, vest, timestamp, zone, camera, created_at, updated_at);
    res.send(Data)

};


const removeData = async (req: Request, res: Response) => {
    
  const id : any = req.params.id;

    const Data = await deleteData(id);
    if (Data) return res.send({ message: "Removed Successfully" });
    return res.status(404).send({ error: "No such Data" });
};

const findAllData = async (req: Request, res: Response) => {
    const Datas = await getAllData();
    return res.send(Datas);
  };


const findDataById = async (req: Request, res: Response) => {
    const id : any = req.params.id;
    const Data = await getDataById(id);
    if (Data) return res.send(Data);
    return res.status(404).send({ error: "No such Data" });
  };

  



  export const testpasser = {
    newData,
    removeData,
    findAllData,
    findDataById,
    
  };