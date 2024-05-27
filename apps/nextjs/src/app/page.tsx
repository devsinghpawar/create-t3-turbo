"use client"
import { Suspense, useEffect } from "react";
import { api } from "~/trpc/react";
import {
  CreatePostForm,
  PostCardSkeleton,
} from "./_components/posts";
export const runtime = "edge";
export default function HomePage() {

  const { data, error } = api.auth.try.useQuery();
  // useEffect(() => {
  //   console.log('daata')
  //   fetch("http://localhost:3000/api/trpc/auth.try?batch=1&input=%7B%220%22%3A%7B%22json%22%3Anull%2C%22meta%22%3A%7B%22values%22%3A%5B%22undefined%22%5D%7D%7D%7D").then((data) => {
  //     return console.log(data)
  //   }).catch((err) => console.log(err))
  //   console.log(data)
  // }, [data])
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary">T3</span> Turbo
        </h1>
        {JSON.stringify(data)}
        {/* <AuthShowcase /> */}

        <CreatePostForm />
        <div className="w-full max-w-2xl overflow-y-scroll">
          <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
              </div>
            }
          >
            {/* <PostList posts={posts} /> */}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
