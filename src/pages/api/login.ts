import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { usersDatabse } from '@/lib/userDatabase';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {


        handleLogin(req, res);

    } else {
        res.status(405).end(); // Method Not Allowed
    }
}

function handleLogin(req: NextApiRequest, res: NextApiResponse) {
    const reqData = JSON.parse(req.body);
    const { username, password } = reqData as { username: string, password: string };
    console.log(username, password);

    if (username && password) {
        if (usersDatabse.has(username) && usersDatabse.get(username) === password) {
            res.setHeader('Set-Cookie', serialize('isLoggedIn', 'true', { path: '/', sameSite: 'lax' }))
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    }
    else res.status(401).json({ error: 'Invalid details' });

}

