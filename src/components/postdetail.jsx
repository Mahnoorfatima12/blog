import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetail } from '../utils';

export default function PostDetail() {
  const params = useParams();
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getPostDetail(params.id);
        setPostDetails(post);
      } catch (error) {
        console.error('Error fetching post details:', error);
        // Handle error, e.g., set an error state or show an error message
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <div>{postDetails?.title}</div>
      <div>{postDetails?.body}</div>
    </div>
  );
}
