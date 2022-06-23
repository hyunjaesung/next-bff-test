import type {NextApiRequest, NextApiResponse} from 'next'
import {URLS} from "../../constants/urls";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const result = await Promise.allSettled([URLS.COUPON, URLS.BOOK, URLS.POINT, URLS.MEMBER].map(url => fetch(url).then(res => res.json()))) as any;
        const resData = {
            name: result[3].value.name,
            point: result[2].value.total,
            reservationToday: result[1].value.hotel.today,
            coupon: result[0]?.value?.total
        }
        res.status(200).json(resData)
    }catch (e){

    }
}
