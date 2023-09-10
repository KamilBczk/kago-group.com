import Contact from "@/components/Contact";
import { getPostById, getPreviousAndNextPosts } from "@/services/blog/index";
import moment from "moment";

export default async function Page({ params }: { params: { slug: string } }) {
  const parse = require("html-react-parser");
  const article = await getPostById(params.slug);
  const nextAndPrev: any = await getPreviousAndNextPosts(article.createdAt);

  return (
    <>
      <div>
        {article != undefined ? (
          <article className="relative overflow-hidden shadow transition">
            <img
              alt="Office"
              src={article.coverImage.url}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h1 className="mt-0.5 text-3xl text-white">{article.title}</h1>

                <div className="flex items-center space-x-4 mt-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={article.author.photo.url}
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <p>{article.author.name}</p>
                    <p className="text-sm text-gray-300">
                      {moment(article.createdAt).format("MM.DD.YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <></>
        )}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <article className="prose">{parse(article.content.html)}</article>
          <fieldset className="grid grid-cols-2 gap-28 mt-10">
            <legend className="sr-only">Delivery</legend>

            <div>
              {nextAndPrev.prev.title ? (
                <a href={`/blog/post/${nextAndPrev.prev.slug}`}>
                  <label
                    htmlFor="DeliveryStandard"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Article précédent</p>

                    <p className="mt-1 text-gray-900">
                      {nextAndPrev.prev.title}
                    </p>
                  </label>
                </a>
              ) : (
                <></>
              )}
            </div>

            <div>
              {nextAndPrev.next.title ? (
                <a href={`/blog/post/${nextAndPrev.next.slug}`}>
                  <label
                    htmlFor="DeliveryStandard"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Article suivant</p>

                    <p className="mt-1 text-gray-900">
                      {nextAndPrev.next.title}
                    </p>
                  </label>
                </a>
              ) : (
                <></>
              )}
            </div>
          </fieldset>
        </div>
        <Contact />
      </div>
    </>
  );
}
