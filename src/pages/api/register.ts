import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        handleRegistration(req, res);
    } else {
        res.status(405).end();
    }
}
function handleRegistration(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', serialize('isLoggedIn', 'true', { path: '/', sameSite: 'lax' }))
    res.status(201).json({ success: true });
}




