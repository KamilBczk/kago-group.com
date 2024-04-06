import Contact from "@/components/Contact";
import {
  getPostBySlug,
  getPreviousAndNextPosts,
  logConsole,
} from "@/services/blog/index";
import moment from "moment";
import { Metadata } from "next";

let article: any;

export default async function Page({ params }: { params: { slug: string } }) {
  const parse = require("html-react-parser");
  const slug = params.slug;
  article = await getPostBySlug(slug);
  logConsole("/blog/post/" + slug);
  const { prevPost, nextPost }: any = await getPreviousAndNextPosts(slug);

  return (
    <>
      <div>
        {article ? (
          <article className="relative overflow-hidden shadow transition ">
            <img
              alt=""
              src={article.coverImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h1 className="mt-0.5 text-3xl text-white">{article.title}</h1>

                <div className="flex items-center space-x-4 mt-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={article.author.photo}
                    alt=""
                  />
                  <div className="font-medium text-white">
                    <p>{article.author.name}</p>
                    <p className="text-sm text-gray-300">
                      {moment(article.createdAt).format("DD.MM.YYYY")}
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
          <article className="prose">{parse(article.content)}</article>
          <fieldset className="grid grid-cols-2 gap-28 mt-10">
            <legend className="sr-only">Delivery</legend>

            <div>
              {prevPost ? (
                <a href={`/blog/post/${prevPost.slug}`}>
                  <label
                    htmlFor="DeliveryStandard"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Article précédent</p>

                    <p className="mt-1 text-gray-900">{prevPost.title}</p>
                  </label>
                </a>
              ) : (
                <></>
              )}
            </div>

            <div>
              {nextPost ? (
                <a href={`/blog/post/${nextPost.slug}`}>
                  <label
                    htmlFor="DeliveryStandard"
                    className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                  >
                    <p className="text-gray-700">Article suivant</p>

                    <p className="mt-1 text-gray-900">{nextPost.title}</p>
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

export async function generateMetadata({ params }: any): Promise<Metadata> {
  let article = await getPostBySlug(params.slug);
  return {
    title: article.title,
    description: article.excerpt,
  };
}
