import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const GetBroadcast = (id: string | string[]) => {
  const channelId = id;
  const broad_url: string = `https://ca-tech-challenge-web-202009.herokuapp.com/v2/broadcasting/${channelId}`;
  
  const { data, error } = useSWR(broad_url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
  
}

export const GetTimeTable = (id: string | string[]) => {
  const channelId = id;
  const broad_url: string = `https://ca-tech-challenge-web-202009.herokuapp.com/v2/timetable/${channelId}`;
  
  const { data, error } = useSWR(broad_url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }

}