import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        handleRegistration(req, res);
    } else {
        res.status(405).end();
    }
}
function handleRegistration(req: NextApiRequest, res: NextApiResponse) {

    let response = NextResponse.next();
    response.cookies.set('isLoggedIn', 'true', { path: '/' });
    res.status(201).json({ success: true });
}




