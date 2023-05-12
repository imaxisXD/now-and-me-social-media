import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { usersDatabse } from '@/lib/userDatabase';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        handleRegistration(req, res);
    } else {
        res.status(405).end();
    }
}
function handleRegistration(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body as { username: string, password: string };;
    if (username && password) {
        if (usersDatabse.has(username)) {
            res.status(409).json({ error: 'Username already exists' });
        } else {
            // Store user in the data store
            usersDatabse.set(username, password);
            let response = NextResponse.next();
            response.cookies.set('isLoggedIn', 'true', { path: '/' });
            res.status(201).json({ success: true });
        }
    }

    else res.status(401).json({ error: 'Invalid details' });
}
