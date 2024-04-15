import { NextResponse, NextRequest } from "next/server";
import responseData from "../../../data/authorization.json";

export async function POST(request: NextRequest) {
    try {
        const { institutionId, userParams } = await request.json();

        const DATA_SORCE_URL = ''; // internal API endpoint
        let paymentMethods;
        if (DATA_SORCE_URL) {
            const res = await fetch(DATA_SORCE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ institutionId, userParams }),
            });
            paymentMethods = await res.json(); // Real data from the internal API
        } else {
            paymentMethods = responseData; // Fallback to local JSON during development
        }

        return NextResponse.json({ success: true, redirectUrl: `/authorize?txId=${userParams}`,  paymentMethods });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: 'Failed to process the request' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
