import { DEFAULT_TAG, USER_KEY } from "@constants";
import { fetcher } from "./fetcher";

export const getDomainKey = (pageIndex: number, previousPageData?: any) => {
  if (previousPageData && !previousPageData?.hasNextPage) return null;
  return `/domain?index=${pageIndex}`;
};

export const getUserData = async (context: any) => {
  let data = null;

  try {
    const authCookie = context.req.cookies["auth-cookie"];

    data = await fetcher(USER_KEY, {
      headers: {
        Cookie: `auth-cookie=${authCookie};`,
      },
    });
  } catch {}

  return data;
};

export const getPageKey = (domainId: string, tagId: string, pageIndex: number, previousPageData?: any) => {
  if (previousPageData && !previousPageData?.hasNextPage) return null;
  const basePageKey = `/page?index=${pageIndex}&domainId=${domainId}`;
  return tagId === DEFAULT_TAG.id ? basePageKey : `${basePageKey}&tagId=${tagId}`;
};
