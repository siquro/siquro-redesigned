// pay.siquro.com
// https://nextjs.org/docs/app/api-reference/functions/use-search-params
// https://github.com/siquro/PinxDashboard/blob/main/composables/useApi.ts
// https://stackoverflow.com/questions/43862600/how-can-i-get-query-string-parameters-from-the-url-in-next-js


import { NextResponse } from 'next/server';


export async function POST(request: Request) {
    const { name, message, email } = await request.json();

    return NextResponse.json({
        status: "Ok"
    })
}