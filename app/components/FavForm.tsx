import { HeartIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { ActionFunction, redirect, Response } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { addToFavourites } from "~/models/favourites.server";

type ActionData =
  | {
      image_id: null | string;
    }
  | undefined;

// export const action: ActionFunction = async ({ request, params }) => {
//   console.log(await request.formData())
//   // return new Response(null, {
//   //   headers:  {
//   //     Location: 'https://api.thecatapi.com/v1/favourites',
//   //     'x-api-key': 'live_EQzBiK2MutfMGJLXfDsNYPGu1PBasljQLGkqmDJnVNUSZeXwRZo6398JdykFs4GL'
//   //   }
//   // })

// console.log('sdffsdfsdfsdfsdfsdf')
//   const formData = await request.formData();
//   console.log(formData)
//   const intent = formData.get("intent");
//   const image_id = formData.get("image_id");

//   // if (intent === 'remove') {
//   //   await removeFavorite(image_id);
//   // }

//   if (intent === 'add') {
//     await addToFavourites({image_id});
//   }

//   return redirect("/favourites");
// };

export default function FavForm({image_id}) {
  // const data = useActionData();
  return (
    <Form method="post">
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2"
          name="intent"
          value='add'
        >
          <HeartIcon className="h-6 w-6 text-red-500"/>
        </button>
      </div>
      <input type="hidden" name="image_id" value={image_id} />
    </Form>
  )
}