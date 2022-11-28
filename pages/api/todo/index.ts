import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"


export default function handler(_: NextApiRequest, res: NextApiResponse) {
    axios
        .get(
            `${process.env.NEXT_PUBLIC_API_ROOT}/todo`
        )
        .then((response) => {
            res.status(200).json(response.data)
        })

        .catch((error) => res.status(500).send(error))
}

export const config = {
    api: {
        externalResolver: true,
    },
}